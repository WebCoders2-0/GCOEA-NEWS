
from rest_framework.response import Response
from rest_framework.views import APIView 
from rest_framework import status
from rest_framework.authtoken import views as auth_views
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework import viewsets
from django.shortcuts import get_object_or_404
from django.contrib.auth import authenticate


from .models import MainUser, News, FavouriteNews, Comment
from django.contrib.auth.models import User
from .serializers  import MainUserSerializer, NewsSerializer, FavouriteNewsSerializer, CommentSerializer


class StuentLogin(APIView):
    def post(self,request,*args,**kwargs):
        data = request.data
        user = authenticate(username = data['username'], password = data['password'])
        if user is not None:
            if user.is_active:
                main_user = get_object_or_404(MainUser,user = user)
                if main_user.user_type == 'Student':
                    token, created = Token.objects.get_or_create(user=user)
                    return Response({'token': token.key,'status':'ok'}, status=status.HTTP_200_OK)
                else:
                    return Response({'msg':'you are not student try to login with public login'},status=status.HTTP_406_NOT_ACCEPTABLE)
            else:
                return Response({'message': 'Cliendly verify your email id.'}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response({'error': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)

        return Response({'msg':'something wents wrong.'},status=status.HTTP_400_BAD_REQUEST)


class StudentRegister(APIView):
    def post(self,request,*args,**kwargs):
        data = request.data
        if data['password'] != data['verify_password']:
            return Response('Please Enter same password in both fields.', status=status.HTTP_400_BAD_REQUEST)
        if User.objects.filter(email = data['email']).exists():
            return Response({'status':'not ok','msg':'user is already created.'},status=status.HTTP_400_BAD_REQUEST)
        if MainUser.objects.filter(register_id = data['register_id']).exists():
            return Response({'msg':'user is already exists.'},status=status.HTTP_404_NOT_FOUND)
        data['user_type'] = 'Student'
        data['email_verify'] = True
        data['admin'] = False
        data['username'] = data['email']
        user = User.objects.create(username = data['register_id'],first_name = data['name'],email = data['email'])
        user.set_password(data['password'])
        user.save()
        data['user'] = user.pk
        serializer = MainUserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            user = User.objects.get(username = data['register_id'])
            token = Token.objects.create(user = user)
            token.save()
            return Response({'status':'ok','msg':'user is created successfully'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        return Response({'msg':'Something wents wrongs'},status=status.HTTP_400_BAD_REQUEST)



# ============================================== public Register end ================================================
class PublicRegister(APIView):
    def post(self,request,*args,**kwargs):
        data = request.data
        if data['password'] != data['verify_password']:
            return Response('Please Enter same password in both fields.', status=status.HTTP_400_BAD_REQUEST)
        if User.objects.filter(username = data['email']).exists():
            return Response({'status':'not ok','msg':'user is already created.'},status=status.HTTP_400_BAD_REQUEST)
        data['user_type'] = 'Public'
        data['email_verify'] = True
        data['admin'] = False
        data['username'] = data['email']
        user = User.objects.create(username = data['email'],first_name = data['name'],email = data['email'])
        user.set_password(data['password'])
        user.save()
        data['user'] = user.pk
        serializer = MainUserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            token = Token.objects.create(user = user)
            token.save()
            return Response({'status':'ok','msg':'user is created successfully'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        return Response({'msg':'Something wents wrongs'},status=status.HTTP_400_BAD_REQUEST)

# ============================================== public Register end ================================================



# ============================================== public login ================================================
class PublicLogin(APIView):
    def post(self,request,*args,**kwargs):
        data = request.data
        user = authenticate(username = data['username'], password = data['password'])
        if user is not None:
            if user.is_active == True:
                main_user = get_object_or_404(MainUser,user = user)
                if main_user.user_type == 'Public':
                    token, created = Token.objects.get_or_create(user=user)
                    return Response({'token': token.key,'status':'ok'}, status=status.HTTP_200_OK)
                else:
                    return Response({'msg':'user is not public try with student login'},status=status.HTTP_400_BAD_REQUEST)
            else:
                return Response({'message': 'Cliendly verify your email id.'}, status=status.HTTP_401_UNAUTHORIZED)
        else:
            return Response({'error': 'Invalid Credentials'}, status=status.HTTP_400_BAD_REQUEST)

        return Response({'msg':'something wents wrong.'},status=status.HTTP_400_BAD_REQUEST)
    
# ============================================== public login ================================================

# ============================================== get User details ================================================

class UserDetails(APIView):
    permission_classes = [IsAuthenticated]
    def get(self,request,*args,**kwargs):
        user = request.user
        main_user = get_object_or_404(MainUser,user = user)
        serializer = MainUserSerializer(main_user,many=False)
        return Response(serializer.data, status=status.HTTP_200_OK)

# ============================================= Create News =================================================

class CreateNews(APIView):
    permission_classes = [IsAuthenticated]
    def post(self,request,*args, **kwargs):
        data = request.data
        main_user = MainUser.objects.get(user = request.user)
        if not main_user.admin:
            return Response({'msg':'you are not admin'},status=status.HTTP_401_UNAUTHORIZED)
        data['user'] = main_user.pk
        serializer = NewsSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({'status':'ok','msg':'news is created successfully'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def get(self,request,*args, **kwargs):
        news = News.objects.all()
        serializer = NewsSerializer(news,many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    def delete(self,request,*args, **kwargs):
        slug = request.data['slug']
        main_user = MainUser.objects.get(user = request.user)
        if not main_user.admin:
            return Response({'msg':'you are not admin'},status=status.HTTP_401_UNAUTHORIZED)
        news = get_object_or_404(News,slug=slug)
        news.delete()
        return Response({'status':'ok','msg':'news is deleted successfully'}, status=status.HTTP_200_OK)

# ============================================= Create News =================================================

# ============================================= All News =================================================
class AllNews(APIView):
    permission_classes = [IsAuthenticated]
    def get(self,request,*args, **kwargs):
        slug = request.query_params.get('slug')
        if slug is not None:
            if News.objects.filter(slug = slug).exists():
                news = News.objects.filter(slug = slug)
                news_serializer = NewsSerializer(news,many=False)
                return Response(news_serializer.data, status=status.HTTP_200_OK)
            else:
                return Response({'msg':'news is not found'},status=status.HTTP_404_NOT_FOUND)
        main_user = MainUser.objects.get(user = request.user)
        news = []
        if main_user.user_type == 'Student':
            news = News.objects.filter(author__user_type = 'Student')
        else:
            news = News.objects.filter(author__user_type = 'Public')
        serializer = NewsSerializer(news,many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

# ==================================== Filter News =================================================
class FilterNews(APIView):
    permission_classes = [IsAuthenticated]
    def get(self,request,*args, **kwargs):
        search = request.query_params.get('search')
        category = request.query_params.get('category')

        if search is not None:
            news = News.objects.filter(title__icontains = search)
            news_serializer = NewsSerializer(news,many=True)
            return Response(news_serializer.data, status=status.HTTP_200_OK)
        if category is not None:
            news = News.objects.filter(news_type = category)
            news_serializer = NewsSerializer(news,many=True)
            return Response(news_serializer.data, status=status.HTTP_200_OK)

        news = News.objects.all()
        serializer = NewsSerializer(news,many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

# ==================================== Filter News =================================================


# ===================================== Edit News =================================================
class EditNews(APIView):
    permission_classes = [IsAuthenticated]
    def post(self,request,*args, **kwargs):
        main_user = MainUser.objects.get(user = request.user)
        if not main_user.admin:
            return Response({'msg':'you are not admin'},status=status.HTTP_401_UNAUTHORIZED)
        data = request.data
        news = get_object_or_404(News,slug = data['slug'])
        if news.author.user != request.user:
            return Response({'msg':'you are not author of this news'},status=status.HTTP_401_UNAUTHORIZED)
        data['user'] = main_user.pk
        serializer = NewsSerializer(news,data=data)
        if serializer.is_valid():
            serializer.save()
            return Response({'status':'ok','msg':'news is updated successfully'}, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# ===================================== Edit News =================================================

        



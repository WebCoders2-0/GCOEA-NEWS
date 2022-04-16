from django.http import HttpResponse
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView 
from rest_framework import status
from rest_framework.authtoken import views as auth_views
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import TokenAuthentication
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework import generics
from rest_framework import viewsets
from django.shortcuts import get_object_or_404


def Home(request):
    return HttpResponse("Hello, world. You're at the polls index.")


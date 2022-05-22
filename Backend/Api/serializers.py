from rest_framework import serializers
from .models import MainUser, News, FavouriteNews, Comment


class MainUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = MainUser
        fields = '__all__'

class NewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = News
        fields = ('id', 'title', 'description', 'image', 'created_datetime')

class FavouriteNewsSerializer(serializers.ModelSerializer):
    class Meta:
        model = FavouriteNews
        fields = ('id', 'user', 'news', 'created_datetime')

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ('id', 'user', 'news', 'comment', 'created_datetime')
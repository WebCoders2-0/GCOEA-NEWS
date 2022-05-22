from django.contrib import admin
from .models import MainUser, News, FavouriteNews, Comment



admin.site.register(MainUser)
admin.site.register(News)
admin.site.register(FavouriteNews)
admin.site.register(Comment)



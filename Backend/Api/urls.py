from django.urls import path
from . import views

urlpatterns = [
    path('student_login/',views.StuentLogin.as_view(),name="student_login"),
    path('student_register/',views.StudentRegister.as_view(),name="student_register"),
    path('public_register/',views.PublicRegister.as_view(),name="public_register"),
    path('public_login/',views.PublicLogin.as_view(),name="public_login"),
    path('get-user/',views.UserDetails.as_view(),name="user_detials"),
    path('filter-news/',views.FilterNews.as_view(),name="filter-news"),
    path('get-news/',views.GetNewsDetails.as_view(),name="get-news"),
    path('add-comment/',views.AddComment.as_view(),name="add-comment"),
    path('favourite-action/',views.AddToFavorite.as_view(),name="add-favourite"),
]
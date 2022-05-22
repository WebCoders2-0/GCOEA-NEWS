from django.urls import path
from . import views

urlpatterns = [
    path('student_login/',views.StuentLogin.as_view(),name="student_login"),
    path('student_register/',views.StudentRegister.as_view(),name="student_register"),
    path('public_register/',views.PublicRegister.as_view(),name="public_register"),
    path('public_login/',views.PublicLogin.as_view(),name="public_login"),
]
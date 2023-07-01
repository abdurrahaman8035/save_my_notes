"""Defines url patterns for users"""
from django.urls import path, include
import django.contrib.auth.urls
from . import views

app_name = 'users'

urlpatterns = [
	#include default auth urls
	path('', include('django.contrib.auth.urls')),
	path('register/', views.register, name='register'),
	path('about_me', views.about_me, name='about_me'),
]
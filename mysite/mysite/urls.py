"""mysite URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from django.views.generic import TemplateView
from login.forms import LoginForm
from django.contrib.auth import views as auth_views

urlpatterns = [
    url(r'', include('main.urls')),  
    url(r'', include('signup.urls')), 
    url(r'', include('adminMenu.urls')),
    url(r'login/$', 
        auth_views.login,   
        name='login_url', kwargs={'authentication_form': LoginForm,}),

    url(r'logout/$', 
        auth_views.logout,   
        name='logout_url', kwargs={'next_page':'/login/',}),  

    path('admin/', admin.site.urls),
]

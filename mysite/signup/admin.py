from django.contrib import admin  
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin  
from django.contrib.auth.models import User  
from .models import Profile

class UserProfileAdmin(admin.ModelAdmin):
    list_display = ['user', 'name',]

admin.site.register(Profile, UserProfileAdmin)

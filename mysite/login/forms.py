from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm

class LoginForm(AuthenticationForm):
    username = forms.CharField(max_length=254,
        widget= forms.TextInput(
            attrs={
                'class': 'form-control',
                'required': 'True',}),
    )

    password = forms.CharField(        
        widget= forms.PasswordInput(
            attrs={
                'class': 'form-control',
                'required': 'True',
            }),
    )
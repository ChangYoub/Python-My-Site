from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.views.generic import View
from django.contrib.auth.models import User
from django.http import JsonResponse    # ajax
from django.contrib.auth.decorators import login_required
from django.db import transaction

from signup.forms import SignupForm
from signup.models import Profile

#pylint: disable=E1101
def signup(request):
    """signup
    to register users
    """    
    if request.method == "POST":        
        signupform = SignupForm(request.POST)     
        if signupform.is_valid():  
            user = signupform.save(commit=False)
            user.email = signupform.cleaned_data['email']
            user.save()                     
            Profile.objects.create(user=user, name=request.POST.get('name'))
            return HttpResponseRedirect("signup_ok")
            # return HttpResponseRedirect(reverse("signup_ok"))

    elif request.method == "GET":    
        signupform = SignupForm()   

    return render(request, "registration/signup.html", {"signupform":signupform,})

class DuplicationCheck(View):
    def post(self, request):                
        username = request.POST.get('username', None)  
        data = {
            'is_taken': User.objects.filter(username__iexact=username).exists()
        }
        return JsonResponse(data)

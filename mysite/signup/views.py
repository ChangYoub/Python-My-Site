from django.shortcuts import render
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.views.generic import View
from django.contrib.auth.models import User
from django.http import JsonResponse    # ajax
from django.contrib.auth.decorators import login_required
from django.db import transaction
from django.http import HttpResponse

from signup.forms import SignupForm
from signup.forms import ProfileForm
from signup.models import Profile
import urllib
from urllib import request
from xml.etree import ElementTree
import json, xmljson

#pylint: disable=E1101
def signup(request):
    """signup
    to register users
    """        
    if request.method == "POST":        
        signupform = SignupForm(request.POST)  
        profileForm = ProfileForm(request.POST)  
        if signupform.is_valid() and profileForm.is_valid():           
            user = signupform.save(commit=False)            
            user.email = signupform.cleaned_data['email']    
            user.save()                  
            print(request.POST.get('is_email'))
            Profile.objects.create(user=user, 
                                   name=request.POST.get('name'), 
                                   zipcode=request.POST.get('zipcode'), 
                                   address1=request.POST.get('address1'),
                                   address2=request.POST.get('address2'),
                                   is_sms=request.POST.get('is_sms'),
                                   phone=request.POST.get('phone'),
                                   mobile=request.POST.get('mobile'),
                                   is_email=request.POST.get('is_email'))
            return HttpResponseRedirect("signup_ok")  
        else:
            print('error')
    elif request.method == "GET":    
        signupform = SignupForm()
        profileForm = ProfileForm(request.POST) 

    return render(request, "registration/signup.html", {"signupform":signupform, "profileForm":profileForm,})

class DuplicationCheck(View):
    def post(self, request):                
        username = request.POST.get('username', None)  
        data = {
            'is_taken': User.objects.filter(username__iexact=username).exists()
        }

        return JsonResponse(data)

def search_address(request):
    query = request.GET.get('zipCode', None)
    currentPage = request.GET.get('currentPage', None)
    query=query.encode('euc-kr')    
    url = "http://biz.epost.go.kr/KpostPortal/openapi?"
    values = {"regkey":"ee164fd5f10417fcd1533888738117",
              "target":"postNew",
              "query":query,
              "countPerPage":15,
              "currentPage":currentPage}
    # currentPage=1
    var = urllib.parse.urlencode(values).encode('utf-8')    
    req = urllib.request.Request(url, var)
 
    req.add_header('accept-language', 'ko')  
    response = urllib.request.urlopen(req)
    r = response.read()
    root = ElementTree.fromstring(r)   
    jsons = json.dumps(xmljson.badgerfish.data(root))   

    return HttpResponse(jsons)

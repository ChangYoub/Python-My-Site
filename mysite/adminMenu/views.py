from django.shortcuts import render
from django.http import HttpResponseRedirect

# Create your views here.
def adminMenu(request) :
    return render(request, "adminMenu.html", {})

def edit(request) :
    return render(request, "edit.html", {})

from django.conf.urls import url
from . import views
from signup.views import DuplicationCheck
from django.contrib.auth.decorators import login_required
from django.contrib.admin.views.decorators import staff_member_required

urlpatterns = [    
    url(r'^signup/', views.signup, name='signup'),         
    url(r'^duplcheck$', views.DuplicationCheck.as_view(), name='duplcheck'),        
]

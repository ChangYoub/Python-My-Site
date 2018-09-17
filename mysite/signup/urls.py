from django.conf.urls import url
from . import views
from signup.views import DuplicationCheck
from signup.views import search_address
from django.contrib.auth.decorators import login_required
from django.contrib.admin.views.decorators import staff_member_required

"""
^ : 문자열이 시작할 때
$ : 문자열이 끝날 때
\d : 숫자
o : 바로 앞에 나오는 항목이 계속 나올 때
() : 패턴의 부분을 저장할 때 
"""

urlpatterns = [    
    url(r'^signup/', views.signup, name='signup'),       
    url(r'^duplcheck$', views.DuplicationCheck.as_view(), name='duplcheck'),        
    url(r'^search_address$', views.search_address)    
]

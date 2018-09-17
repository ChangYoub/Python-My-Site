from django.db import models
from django.contrib.auth.models import User
from django.db.models.signals import post_save  
from django.dispatch import receiver
''' 
* models.CharField - 글자 수가 제한된 텍스트를 정의 (글 제목등의 짧은 문자열 정보를 저장). 
* models.TextField - 글자 수에 제한이 없는 긴 텍스트를 위한 속성 (콘텐츠 글 등을 저장).
* models.DateTimeField - 날짜와 시간을 의미한다.
* models.ForeignKey - 다른 모델에 대한 링크를 의미한다.
'''

''' 사용자 정보 저장용 Database Model 정의 '''
# 사용자 프로필 Model 정의
# Field Options : null, blank, choices(data type) = tuple,
#                 default, help_text, primary_key, unique
#pylint: disable=E1101
class Profile(models.Model):  
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=20)  # blank opt : 필수 입력 값 설정
    zipcode = models.CharField(max_length=5)     
    address1 = models.CharField(max_length=50)
    address2 = models.CharField(max_length=50)
    is_sms = models.BooleanField()
    phone = models.CharField(max_length=15)
    mobile = models.CharField(max_length=15)
    is_email = models.BooleanField()

    class Meta:
        verbose_name = 'Profile'
        verbose_name_plural = 'profiles'

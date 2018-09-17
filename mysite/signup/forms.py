from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
from signup.models import Profile

# username : 이용자 ID 역할. 다른 값과 중복되지 않는 고유한 값만 허용 (unique=True)
# password : 비밀번호. PasswordField 모델 필드
# first_name : 성씨. CharField 모델 필드이며 생략 가능.
# last_name : 이름. CharField 모델 필드이며 생략 가능.
# email : 전자우편 주소. EmailField 모델 필드
# is_staff : 관리자 여부. BooleanField 모델 필드.
# is_active : 활성화 된 계정인지 여부. BooleanFIeld 모델 필드.

class SignupForm(UserCreationForm):     
    error_messages = {
            'password_mismatch': "비밀번호와 비밀번호 확인란의 값이 일치하지 않습니다.",
    }      

    class Meta:
        model = User
        fields = ("username", "email", "password1", "password2")  


class ProfileForm(forms.ModelForm):    
    class Meta:
        model = Profile
        fields =('name', 'zipcode', 'address1', 'address2', 'is_sms', 'phone', 'mobile', 'is_email')
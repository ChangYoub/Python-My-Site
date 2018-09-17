from django.conf.urls import url
from . import views
from adminMenu.views import adminMenu
from adminMenu.views import edit

urlpatterns = [    
    url(r'^admin_menu$', views.adminMenu, name='adminMenu'),
    url(r'^edit$', views.edit, name='edit'),
]

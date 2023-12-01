from django.urls import path
from  . import views
app_name="uisettings"
urlpatterns = [
    path("",views.get_update_user_uisettings,name="get_update_uisettings")
]
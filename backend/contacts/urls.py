from django.contrib import admin
from django.urls import include, path
from . import views
app_name="contacts"
urlpatterns = [
   path("",views.contact_list_save),
]

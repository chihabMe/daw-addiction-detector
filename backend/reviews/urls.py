from django.contrib import admin
from django.urls import include, path
from . import views
app_name="reviews"
urlpatterns = [
    path("create/",views.reviews_input, name="reviews input"),
   

]
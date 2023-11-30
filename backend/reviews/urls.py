from django.contrib import admin
from django.urls import include, path
from . import views
app_name="reviews"
urlpatterns = [
   path("",views.reviews_list, name="reviews list"),
   path("v2/",views.average_rating, name=" average rating")
]
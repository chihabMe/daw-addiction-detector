from django.urls import path

from .views import get_all_answers

app_name = "answers"

urlpatterns = [
    path("", get_all_answers, name="get_all_answers"),
]

from django.urls import path

from .views import AnswersListView,AnswersDetailView


app_name = "answers"

urlpatterns = [
        path("", AnswersListView.as_view(), name="get_user_all_answers"),
        path("<int:id>/", AnswersDetailView.as_view(), name="get_all_answers"),
]

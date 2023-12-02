from django.urls import path

from .views import get_all_answers,AnswersListView


app_name = "answers"

urlpatterns = [
        path("<int:patient_id>", AnswersListView.as_view(), name="get_user_all_answers"),
]

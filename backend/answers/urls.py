from django.urls import path

from .views import AnswersListView


app_name = "answers"

urlpatterns = [
        path("<int:patient_id>", AnswersListView.as_view(), name="get_user_all_answers"),
]

from django.urls import path

from . import views

app_name = "questions"

urlpatterns = [
    path(
        "",
        views.QuestionListCreateView.as_view(),
        name="questions_class_list_create",
    ),
    path(
        "<int:question_id>/",
        views.question_details_update_delete_view,
        name="question_details_update_delete",
    ),
    path(
        "options/<int:question_id>/",
        views.question_response_options_list_create,
    ),
]

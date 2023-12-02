from django.urls import path

from . import views

app_name = "accounts"

urlpatterns = [
    path("register", views.create_user_view),
    path("profile", views.get_update_profile),
    path("profile/delete", views.delete_account),
]

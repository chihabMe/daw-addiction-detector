from django.urls import include, path
from rest_framework_simplejwt.views import (
        TokenObtainPairView,
        TokenRefreshView,
        TokenVerifyView
        )

app_name  = "authentication"

urlpatterns = [
        path("token/obtain",TokenObtainPairView.as_view(),name="token_obtain"),
        path("token/refresh",TokenRefreshView.as_view(),name="token_refresh"),
        path("token/verify",TokenVerifyView.as_view(),name="token_verify"),

        ]

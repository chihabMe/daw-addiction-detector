from django.urls import  path
from rest_framework_simplejwt.views import (
        TokenRefreshView,
        TokenVerifyView,
        )
from .views import (
        CurrentAuthUser,
        ObtainTokenView,
        TokenBlackListView
        )
app_name  = "authentication"

urlpatterns = [
        path("token/obtain/",ObtainTokenView.as_view(),name="token_obtain"),
        path("token/refresh/",TokenRefreshView.as_view(),name="token_refresh"),
        path("token/verify/",TokenVerifyView.as_view(),name="token_verify"),
        path("token/logout/",TokenBlackListView.as_view(),name="token_blacklist"),
        path("me/",CurrentAuthUser.as_view(),name="current_auth_user"),

        ]

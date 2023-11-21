from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("admin/", admin.site.urls),
    path("api/v1/patients/", include("patients.urls", namespace="patients")),
    path("api/v1/questions/", include("questions.urls", namespace="questions")),
    path("api/v1/auth/", include("authentication.urls", namespace="authentication")),
]

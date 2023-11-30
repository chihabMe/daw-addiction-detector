from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path("admin/", include("admin_volt.urls")),
    path("api/v1/patients/", include("patients.urls", namespace="patients")),
    path("api/v1/questions/", include("questions.urls", namespace="questions")),
    path("api/v1/auth/", include("authentication.urls", namespace="authentication")),
    path("api/v1/contact", include("contacts.urls", namespace="contacts")),
    path("api/v1/accounts", include("accounts.urls", namespace="accounts")),
    path("api/v1/reviews/", include("reviews.urls", namespace="reviews")),
]


if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

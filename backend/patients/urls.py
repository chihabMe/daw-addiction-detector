from django.urls import path
from . import views
app_name = "patients"

urlpatterns = [
    path("",views.patients_list,name="patients_list"),
    path("v2/",views.PatientListCreateView.as_view(),name="patients_list_create"),
]
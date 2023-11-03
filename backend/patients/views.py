from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import PatientSerializer
from .models import Patient
# Create your views here.

@api_view(["GET"])
def patients_list(request):
    patients = Patient.objects.all()
    serializer = PatientSerializer(patients,many=True)
    return Response(serializer.data)



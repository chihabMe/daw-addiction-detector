from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from .models import Patient
from .serializers import PatientSerializer



@api_view(["GET", "POST"])
def patients_list(request):
    patients = Patient.objects.all()
    if request.method == "POST":
        data = request.POST
        # to complete
        pass

    serializer = PatientSerializer(patients, many=True)
    if not serializer.is_valid:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.data, status=status.HTTP_200_OK)

    # def create(self, request, *args, **kwargs):
    # serializer = self.get_serializer(data=request.data)
    # serializer.is_valid(raise_exception=True)
    # self.perform_create(serializer)
    # headers = self.get_success_headers(serializer.data)
    # return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


class PatientListCreateView(ListCreateAPIView):
    queryset = Patient.objects.all()
    serializer_class = PatientSerializer

    # permission_classes=[IsAuthenticated]
    def create(self, request, *args, **kwargs):
        user = request.user
        return super().create(request, *args, **kwargs)

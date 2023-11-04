from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.generics import ListCreateAPIView
from rest_framework.permissions import IsAuthenticated
from .serializers import PatientSerializer
from .models import Patient

# Create your views here.


@api_view(["GET"])
def patients_list(request):
    patients = Patient.objects.all()
    serializer = PatientSerializer(patients, many=True)
    return Response(serializer.data)

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


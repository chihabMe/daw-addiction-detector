from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView, RetrieveAPIView,ListCreateAPIView
from rest_framework.response import Response
from rest_framework.views import status
from django.http import Http404

from .models import Answer
from .serializers import AnswerSerializer,AnswersListSerializer


# Create your views here.
class  AnswersListView(ListCreateAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswersListSerializer
    
class AnswersDetailView(RetrieveAPIView):
    serializer_class = AnswerSerializer
    lookup_field = "id"
    def get_object(self):
        patient_id = self.kwargs.get(self.lookup_field)
        print(patient_id)
        try:
            return Answer.objects.get(patient__id=patient_id)
        except Answer.DoesNotExist:
            raise Http404("Answer not found for the specified patient ID.")

    def retrieve(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance)
        return Response(serializer.data)


# @api_view(["GET"])
# def get_all_answers(request):
#     patient_id = request.GET.get("patient_id")
#     if patient_id is None or len(patient_id.strip()) == 0:
#         return Response(status=status.HTTP_404_NOT_FOUND)
#     answers = Answer.objects.filter(patient_id=patient_id)
#     serializer = AnswerSerializer(answers, many=True)
#     return Response(serializer.data)

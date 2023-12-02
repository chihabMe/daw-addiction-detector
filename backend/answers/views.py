from django.shortcuts import render
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework.decorators import api_view
from rest_framework.generics import ListAPIView, RetrieveAPIView
from rest_framework.response import Response
from rest_framework.views import status

from .models import Answer
from .serializers import AnswerSerializer


# Create your views here.
class AnswersListView(RetrieveAPIView):
    queryset = Answer.objects.all()
    serializer_class = AnswerSerializer
    lookup_field = "patient_id"


# @api_view(["GET"])
# def get_all_answers(request):
#     patient_id = request.GET.get("patient_id")
#     if patient_id is None or len(patient_id.strip()) == 0:
#         return Response(status=status.HTTP_404_NOT_FOUND)
#     answers = Answer.objects.filter(patient_id=patient_id)
#     serializer = AnswerSerializer(answers, many=True)
#     return Response(serializer.data)

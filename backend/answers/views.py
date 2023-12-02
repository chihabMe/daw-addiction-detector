from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Answer
from .serializers import AnswerSerializer

# Create your views here.


@api_view(["GET"])
def get_all_answers(request):
    answers = Answer.objects.all()
    serializer = AnswerSerializer(answers, many=True)
    return Response(serializer.data)

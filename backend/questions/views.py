from django.shortcuts import get_object_or_404, render
from rest_framework import generics, mixins, status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from core.permissions import IsDoctorOrReadOnly

from .models import Question, QuestionResponseOptions, QuestionType
from .serializers import (QuestionResponseOptionSerializer, QuestionSerializer,
                          QuestionTypeSerializer)

# Create your views here.


# to do use class based views
@api_view(["GET", "POST"])
def question_list_create_view(request):
    if request.method == "GET":
        questions = Question.objects.all()
        serializer = QuestionSerializer(questions, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == "POST":
        serializer = QuestionSerializer(data=request.data, context={"request": request})
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


##GenericApiView does that by default i should remove it from here
class QuestionListCreateView(
    mixins.CreateModelMixin, mixins.ListModelMixin, generics.GenericAPIView
):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer
    # permission_classes=[IsAuthenticated]

    def get(self, request, *args, **kwargs):
        return self.list(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)  # to do use class based views


@api_view(["GET", "PUT", "DELETE"])
def question_details_update_delete_view(request, question_id):
    try:
        question = Question.objects.get(id=question_id)
    except Question.DoesNotExsit:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        serializer = QuestionSerializer(question)
        return Response(serializer.data, status=status.HTTP_200_OK)

    elif request.method == "PUT":
        serializer = QuestionSerializer(question, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == "DELETE":
        if request.is_authenticated:
            user = request.user
            if question.creator.pk == user.id:
                question.delete()
                return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(["GET", "POST"])
def question_response_options_list_create(request, question_id):
    if request.method == "GET":
        options = QuestionResponseOptions.objects.filter(question_id=question_id)
        serializer = QuestionResponseOptionSerializer(options, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
    elif request.method == "POST":
        serializer = QuestionResponseOptionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)

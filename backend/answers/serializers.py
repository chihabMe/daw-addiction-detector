from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()


from .models import Answer, AnswerItem
class AnswerUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields  =["first_name","last_name","email","image"]
class AnswersListSerializer(serializers.ModelSerializer):
    user = AnswerUserSerializer(source="patient.user",read_only=True)
    class Meta:
        model = Answer
        fields = ["user","id", "created_at", "updated_at"]

class AnswerItemSerializer(serializers.ModelSerializer):
    question = serializers.CharField(source="question.title")
    question_response_option = serializers.CharField(
        source="question_response_option.text"
    )

    class Meta:
        model = AnswerItem
        fields = ["question", "question_response_option"]


class AnswerSerializer(serializers.ModelSerializer):
    answers = AnswerItemSerializer(many=True,read_only=True)

    class Meta:
        model = Answer
        fields = ["answers","id", "created_at", "updated_at"]


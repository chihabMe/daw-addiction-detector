from rest_framework import serializers

from .models import Answer, AnswerItem
class AnswersListSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source="patient.user.first_name")
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


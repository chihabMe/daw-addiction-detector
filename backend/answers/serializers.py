from rest_framework import serializers

from .models import Answer, AnswerItem


class AnswerItemSerializer(serializers.ModelSerializer):
    question = serializers.CharField(source="question.title")
    question_response_option = serializers.CharField(
        source="question_response_option.body"
    )

    class Meta:
        model = AnswerItem
        fields = ["question", "question_response_option"]


class AnswerSerializer(serializers.ModelSerializer):
    items = AnswerItemSerializer(read_only=True)

    class Meta:
        model = Answer
        fields = ["items", "created_at", "updated_at"]

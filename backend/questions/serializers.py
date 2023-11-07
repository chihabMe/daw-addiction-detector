from rest_framework import serializers

from .models import Question, QuestionResponseOptions, QuestionType


class QuestionTypeSerializer(serializers.ModelSerializer):
    creator = serializers.CharField(source="creator.get_full_name", read_only=True)

    class Meta:
        model = QuestionType
        fields = ("id", "description", "title", "creator", "created", "updated")


class QuestionSerializer(serializers.ModelSerializer):
    creator = serializers.CharField(source="creator.get_full_name", read_only=True)

    type = QuestionTypeSerializer(read_only=True)

    type_id = serializers.CharField(write_only=True)

    class Meta:
        model = Question
        fields = (
            "id",
            "title",
            "body",
            "creator",
            "type",
            "type_id",
            "points",
            "created",
            "updated",
        )

    def validate_type_id(self, type_id):
        try:
            question_type = QuestionType.objects.get(id=type_id)
        except:
            raise serializers.ValidationError("Invalid question type id")
        return type_id

    def create(self, validated_data):
        type_id = validated_data.pop("type_id")
        user = self.context["request"].user
        question = Question.objects.create(
            creator=user, type_id=type_id, **validated_data
        )
        return question


class QuestionResponseOptionSerializer(serializers.ModelSerializer):
    question_id = serializers.CharField(source="question.id")

    class Meta:
        model = QuestionResponseOptions
        fields = ("id", "text", "question_id", "created", "updated")

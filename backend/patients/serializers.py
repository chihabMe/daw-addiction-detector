from rest_framework import serializers
from rest_framework.serializers import ModelSerializer

from .models import Patient


class PatientSerializer(ModelSerializer):
    first_name = serializers.CharField(source="user.first_name", read_only=True)
    last_name = serializers.CharField(source="user.last_name", read_only=True)
    gender = serializers.CharField(source="user.gender", read_only=True)
    # phone = serializers.CharField(source="user.phone")
    created = serializers.DateTimeField(source="user.created", read_only=True)
    updated = serializers.DateTimeField(source="user.updated", read_only=True)

    class Meta:
        model = Patient
        fields = [
            "first_name",
            "last_name",
            "gender",
            # "phone",
            "addiction_level",
            "average_hours_of_play_per_week",
            "average_month_of_play",
            "insomnia_score",
            "excessive_sleepiness_score",
            "anxiety_score",
            "depression_score",
            "created",
            "updated",
        ]

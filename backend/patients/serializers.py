from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from .models import Patient

class PatientSerializer(ModelSerializer):
    first_name = serializers.CharField(source="user.first_name")
    last_name = serializers.CharField(source="user.last_name")
    gender = serializers.CharField(source="user.gender")
    # phone = serializers.CharField(source="user.phone")
    created = serializers.DateTimeField(source="user.created")
    updated = serializers.DateTimeField(source="user.updated")
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
        "updated"
        ]

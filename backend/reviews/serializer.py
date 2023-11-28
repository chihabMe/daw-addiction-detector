from rest_framework import serializers
from .models import Reviews


class ReviewsSerlializer(serializers.ModelSerializer):
    class Meta:
        model= Reviews
        user_name= serializers.CharField()
        fields= ["user",
                "text",
                "rating",
                "date"
                ]


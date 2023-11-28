from rest_framework import serializers
from .models import Reviews


class ReviewsSerlializer(serializers.ModelSerializer):
    class Meta:
        model= Reviews
        fields= ["writer", "text", "rating ", "date"]


class RatingSerializer (serializers.ModelSerializer):
    class Meta:
        model= Reviews
        fields = ["rating"]

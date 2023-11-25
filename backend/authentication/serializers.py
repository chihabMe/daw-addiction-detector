from django.contrib.auth import get_user_model
from rest_framework.schemas.coreapi import serializers

User = get_user_model()


class CurrentAuthUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["email", "first_name", "id"]

class TokenBlackListSerializer(serializers.Serializer):
    refresh = serializers.CharField()
    class Meta:
        fields = ["refresh"]

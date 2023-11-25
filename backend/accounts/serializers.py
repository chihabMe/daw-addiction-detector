from django.contrib.auth import get_user_model
from rest_framework.schemas.coreapi import serializers

User = get_user_model()


class UserCreationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField()

    class Meta:
        model = User
        fields = ["first_name", "last_name", "email", "password", "password2"]

    def validate_password2(self, password2):
        if password2 != self.initial_data.get("password"):
            raise serializers.ValidationError("Passwords don't match")
        return password2

    def create(self, validated_data):
        validated_data.pop("password2")
        password = validated_data.pop("password")
        user = User(**validated_data)
        user.set_password(password)
        user.save()
        return user

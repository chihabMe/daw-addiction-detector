from django.contrib.auth import get_user_model
from rest_framework.schemas.coreapi import serializers

User = get_user_model()


class UserCreationSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(write_only=True)

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


class UserProfileSerializer(serializers.ModelSerializer):
    email = serializers.CharField(source="email", read_only=True)
    user_type = serializers.CharField(source="user_type", read_only=True)

    class Meta:
        model = User
        fields = [
            "first_name",
            "last_name",
            "email",
            "phone",
            "user_type",
            "gender",
            "created_at",
            "updated_at",
        ]

    def update(self, instance, validated_data):
        instance.first_name = validated_data.get("first_name", instance.first_name)
        instance.last_name = validated_data.get("last_name", instance.last_name)
        instance.phone = validated_data.get("phone", instance.phone)
        instance.gendre = validated_data.get("gender", instance.gender)

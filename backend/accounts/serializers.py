from django.contrib.auth import get_user_model
from django.contrib.auth.base_user import check_password
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
    email = serializers.CharField(read_only=True)
    user_type = serializers.CharField(read_only=True)
    created_at = serializers.DateTimeField(read_only=True)
    updated_at = serializers.DateTimeField(read_only=True)

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
        extra_kwargs = {
            "phone": {"required": False, "allow_blank": True},
        }

    def update(self, instance, validated_data):
        instance.first_name = validated_data.get("first_name", instance.first_name)
        instance.last_name = validated_data.get("last_name", instance.last_name)
        instance.phone = validated_data.get("phone", instance.phone)
        instance.gendre = validated_data.get("gender", instance.gender)
        instance.save()
        return instance


class AccountDeletionSerializer(serializers.Serializer):
    password = serializers.CharField()

    def validate_password(self, password):
        user = self.context["request"].user
        if not check_password(password, user.password):
            raise serializers.ValidationError("Invalid password")
        return password

    def save(self):
        user = self.context["request"].user
        user.is_active = False
        return user.save()

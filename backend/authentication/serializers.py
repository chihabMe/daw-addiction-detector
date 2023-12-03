from django.contrib.auth import get_user_model
from rest_framework.schemas.coreapi import serializers

User = get_user_model()


class CurrentAuthUserSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField(source="get_image")
    class Meta:
        model = User
        fields = ["email", "first_name", "id","user_type","image"]


    def get_image(self, obj):
        request = self.context["request"]
        if obj.image:
            return request.build_absolute_uri(obj.image.url)
        return None

class TokenBlackListSerializer(serializers.Serializer):
    refresh = serializers.CharField()
    class Meta:
        fields = ["refresh"]

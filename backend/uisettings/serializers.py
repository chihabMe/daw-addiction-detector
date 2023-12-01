from rest_framework import serializers
from .models import UiSettings

class UiSettingsSerializer(serializers.ModelSerializer):
    class Meta:
        model = UiSettings
        fields = [
            "theme",
            "qt_display_type",
            "qt_show_alph",
        ]
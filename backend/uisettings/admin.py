from django.contrib import admin
from .models import UiSettings

# Register your models here.

class UiSettingsAdmin(admin.ModelAdmin):
    list_display = (
        "user",
        "theme",
        "language",
        "qt_display_type",
        "qt_show_alph"
    )

admin.site.register(UiSettings,UiSettingsAdmin)
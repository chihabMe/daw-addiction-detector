from django.contrib import admin
from .models import CustomUser

# Register your models here.


class CustomUserAdmin(admin.ModelAdmin):
    list_display = (
        "email",
        "first_name",
        "last_name",
        "is_active",
        "is_superuser",
    )
    list_filter = ("is_active","is_superuser")
    search_fields = ("email", "email")


admin.site.register(CustomUser, CustomUserAdmin)

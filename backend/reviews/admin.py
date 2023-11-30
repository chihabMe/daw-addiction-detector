from django.contrib import admin
from .models import Reviews

# Register your models here.
class AdminReviews (admin.ModelAdmin):
    list_display =(
        "user",
        "rating",
        "text",
        "date",
    )


admin.site.register(Reviews, AdminReviews)
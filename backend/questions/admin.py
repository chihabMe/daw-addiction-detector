from django.contrib import admin

from .models import Question, QuestionResponseOptions, QuestionType

# Register your models here.


class QuestionAdmin(admin.ModelAdmin):
    list_display = (
        "creator",
        "type",
        "points",
        "created",
        "updated",
    )
    list_filter = ("type",)
    search_fields = ("creator", "type")


class QuestionTypeAdmin(admin.ModelAdmin):
    list_display = ("description", "creator", "title", "created", "updated")
    search_fields = ("description", "title")


class QuestionResponseOptionsAdmin(admin.ModelAdmin):
    list_display = ("text", "question", "created", "updated")


admin.site.register(Question, QuestionAdmin)
admin.site.register(QuestionType, QuestionTypeAdmin)
admin.site.register(QuestionResponseOptions, QuestionResponseOptionsAdmin)

# Register your models here.
from django.contrib import admin
from .models import Answer, AnswerItem

from django.contrib import admin
from .models import Answer, AnswerItem

class AnswerItemInline(admin.TabularInline):
    model = AnswerItem
    extra = 1

class AnswerAdmin(admin.ModelAdmin):
    list_display = ["patient","reviewed", "get_answers_count", "created_at", "updated_at"]
    readonly_fields = ["created_at", "updated_at"]
    inlines = [AnswerItemInline]

    def get_answers_count(self, obj):
        return obj.answers.count()

    get_answers_count.short_description = "Number of Answers"

class AnswerItemAdmin(admin.ModelAdmin):
    list_display = ["answer", "question_response_option"]

admin.site.register(Answer, AnswerAdmin)
admin.site.register(AnswerItem, AnswerItemAdmin)

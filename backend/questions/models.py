from django.contrib.auth import get_user_model
from django.db import models
from doctors.models import Doctor

User = get_user_model()
# Create your models here.
class QuestionType(models.Model):
    description = models.TextField()
    creator = models.ForeignKey(
        User, related_name="created_question_types", on_delete=models.CASCADE
    )
    title = models.CharField(max_length=300)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return self.title


class Question(models.Model):
    body = models.TextField()
    creator = models.ForeignKey(
        User, related_name="created_questions", on_delete=models.CASCADE
    )
    type = models.ForeignKey(QuestionType, on_delete=models.CASCADE)
    points = models.IntegerField()
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return str(self.type) + ":" + self.body[0:30]


class QuestionResponseOptions(models.Model):
    text = models.TextField()
    question = models.ForeignKey(Question, on_delete=models.CASCADE)
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    def __str__(self) -> str:
        return "response option to " + str(self.question)

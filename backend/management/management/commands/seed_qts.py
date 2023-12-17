from django.contrib.auth import get_user_model
from django.core.management.base import BaseCommand

from questions.models import Question, QuestionResponseOptions, QuestionType

User = get_user_model()


class Command(BaseCommand):
    help = "Seed database with initial data"

    def handle(self, *args, **kwargs):
        # Create a user for seeding
        user = User.objects.first()

        # Seed QuestionType
        question_type = QuestionType.objects.create(
            title="Understanding Daily Gaming Habits",
            description="In the realm of your daily routine, how much time do you typically allocate to gaming, immersing yourself in the digital landscapes of your favorite titles?",
            creator=user,
        )

        # Seed Questions and Response Options
        questions_data = [
            {
                "title": "Daily Gaming Hours",
                "body": "How much time do you spend gaming daily?",
                "points": 10,
                "options": [
                    "Less than 1 hour",
                    "1-2 hours",
                    "2-3 hours",
                    "3-4 hours",
                    "4-5 hours",
                    "5+ hours",
                ],
            },
            {
                "title": "Evaluating Social Impact",
                "body": "Reflecting on the broader canvas of your social connections, consider the ways in which your engagement in gaming has shaped and influenced your relationships. From strengthening bonds to potential isolation, assess the spectrum of social dynamics.",
                "points": 15,
                "options": [
                    "Strengthened connections",
                    "No discernible impact",
                    "Limited interactions",
                    "Strained relationships",
                    "Isolation from social activities",
                ],
            },
            # Add more questions as needed
        ]

        for question_data in questions_data:
            question = Question.objects.create(
                title=question_data["title"],
                body=question_data["body"],
                creator=user,
                type=question_type,
                points=question_data["points"],
            )

            for option_text in question_data["options"]:
                QuestionResponseOptions.objects.create(
                    text=option_text, question=question
                )

        self.stdout.write(self.style.SUCCESS("Data seeding complete"))

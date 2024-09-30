#!/usr/bin/env python
"""Django's command-line utility for administrative tasks."""
import os
import sys
from django.contrib.auth import get_user_model

User = get_user_model()

# # Create a superuser only if it doesn't exist
# if not User.objects.filter(username=os.getenv('DJANGO_SUPERUSER_USERNAME')).exists():
#     username = os.getenv('DJANGO_SUPERUSER_USERNAME')
#     email = os.getenv('DJANGO_SUPERUSER_EMAIL')
#     print("created a super user ",email)
#     User.objects.create_superuser(
#         username=username,
#         email=email,
#         password=os.getenv('DJANGO_SUPERUSER_PASSWORD')
#     )


def main():
    """Run administrative tasks."""
    os.environ.setdefault("DJANGO_SETTINGS_MODULE", "core.settings")
    try:
        from django.core.management import execute_from_command_line
    except ImportError as exc:
        raise ImportError(
            "Couldn't import Django. Are you sure it's installed and "
            "available on your PYTHONPATH environment variable? Did you "
            "forget to activate a virtual environment?"
        ) from exc
    execute_from_command_line(sys.argv)


if __name__ == "__main__":
    main()

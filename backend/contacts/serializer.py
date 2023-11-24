from rest_framework import serializers
from .models import Contact

class ContactsSerializer(serializers.ModelSerializer):
    class meta:
        model = Contact
        field = ["email","first_name","last_name","text"]

    
from django.shortcuts import render
from .models import Contact
from rest_framework.decorators import api_view
from .serializer import ContactSerializer
from rest_framework.response import Response
# Create your views here.

@api_view(['GET'])
def contact_list(request):
    contact= Contact.objects.all()
    
    serializer = ContactSerializer(contact, many= True)
    return Response(serializer.data)



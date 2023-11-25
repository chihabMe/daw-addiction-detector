from django.shortcuts import render
from rest_framework.permissions import IsAdminUser
from .models import Contact
from rest_framework.decorators import api_view
from .serializer import ContactSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
# Create your views here.

@api_view(['GET','POST'])
def contact_list_save(request):
    contact= Contact.objects.all()
    if request.method == "POST":
        serializer=ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    serializer = ContactSerializer(contact, many= True)
    return Response(serializer.data)





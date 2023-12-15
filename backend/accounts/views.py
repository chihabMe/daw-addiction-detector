from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from patients.models import Patient

from .models import CustomUser as User
from .serializers import (AccountDeletionSerializer, PatientProfileSerializer,
                          UserCreationSerializer, UserProfileSerializer)

# Create your views here.


@api_view(["POST"])
def create_user_view(request):
    serializer = UserCreationSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response("success", status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET", "PUT"])
@permission_classes([IsAuthenticated])
def get_update_profile(request):
    user = request.user
    if request.method == "PUT":
        serializer = UserProfileSerializer(user, data=request.data)
        if serializer.is_valid():
            serializer.save(owner=user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    serializer = UserProfileSerializer(user,context={"request":request})
        
    return Response(serializer.data)


@api_view(["DELETE"])
@permission_classes([IsAuthenticated])
def delete_account(request):
    serializer = AccountDeletionSerializer(
        data=request.data, context={"request": request}
    )
    if serializer.is_valid():
        serializer.save()
        return Response("deleted")
    return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

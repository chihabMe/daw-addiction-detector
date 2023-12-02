from rest_framework.decorators import api_view,permission_classes
from rest_framework.response import Response
from .models import UiSettings
from .serializers import UiSettingsSerializer
from rest_framework import status
from rest_framework.permissions import IsAuthenticated

@api_view(['GET','PUT'])
@permission_classes([IsAuthenticated])
def get_update_user_uisettings(request):
    if request.method=="PUT":
        print("do the update")
        return Response("sucess")
    try:
        ui_settings = UiSettings.objects.get(user=request.user)
    except UiSettings.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    serializer = UiSettingsSerializer(ui_settings)
    return Response(serializer.data)




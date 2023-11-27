from rest_framework.permissions import SAFE_METHODS, BasePermission


class IsDoctorOrReadOnly(BasePermission):
    def has_permission(self, request, view):
        return bool(
            request.method in SAFE_METHODS
            or request.user
            and request.user.is_authenticated
            and request.user.user_type == "doctor"
        )

from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import PermissionsMixin
from django.db import models


class UserManager(BaseUserManager):
    def create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError("Email is required")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_staff", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff = True")

        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser = True")
        return self.create_user(email, password, **extra_fields)


def user_image_namer(instance, name):
    return instance.email + "/" + name


class CustomUser(AbstractBaseUser, PermissionsMixin):
    class UserTypes(models.IntegerChoices):
        PAITENT = 1, "paitent"
        DOCTOR = 2, "doctor"
        ADMIN = 3, "admin"

    class GenderChoices(models.IntegerChoices):
        MALE = 1, "male"
        female = 2, "female"

    email = models.EmailField("email", unique=True)
    first_name = models.CharField("first name", max_length=200, blank=True)
    last_name = models.CharField("last name", max_length=200, blank=True)
    image = models.ImageField(upload_to=user_image_namer, null=True, blank=True)
    phone = models.CharField(max_length=12)
    gender = models.CharField(max_length=1, choices=GenderChoices.choices, default="M")
    created = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField("active", default=True)
    is_staff = models.BooleanField("is staff", default=False)
    user_type = models.CharField(
        max_length=10, choices=UserTypes.choices, default="paitent"
    )
    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    class Meta:
        verbose_name = "user"
        verbose_name_plural = "users"

    def get_full_name(self):
        return str(self.first_name) + " " + str(self.last_name)

    def __str__(self):
        return self.get_full_name()

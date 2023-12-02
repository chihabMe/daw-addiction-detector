from django.contrib.auth.base_user import AbstractBaseUser, BaseUserManager
from django.contrib.auth.models import PermissionsMixin
from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver
from patients.models import Patient
from uisettings.models import UiSettings


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
    class UserTypes(models.TextChoices):
        PATIENT = "PATIENT", "patient"
        DOCTOR = "DOCTOR", "doctor"
        ADMIN = "ADMIN", "admin"

    class GenderChoices(models.TextChoices):
        MALE = "MALE", "male"
        female = "FEMALE", "female"

    email = models.EmailField("email", unique=True)
    first_name = models.CharField("first name", max_length=200, blank=True)
    last_name = models.CharField("last name", max_length=200, blank=True)
    image = models.ImageField(upload_to=user_image_namer, null=True, blank=True)
    phone = models.CharField(max_length=12)
    gender = models.CharField(max_length=6, choices=GenderChoices.choices, default=GenderChoices.MALE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    is_active = models.BooleanField("active", default=True)
    is_staff = models.BooleanField("is staff", default=False)
    user_type = models.CharField(
        max_length=10, choices=UserTypes.choices, default=UserTypes.PATIENT
    )
    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["first_name","last_name"]

    class Meta:
        verbose_name = "user"
        verbose_name_plural = "users"

    def get_full_name(self):
        return str(self.first_name) + " " + str(self.last_name)

    def __str__(self):
        return self.get_full_name()

@receiver(post_save,sender=CustomUser)
def create_patient(sender,instance,created,**kwargs):
    if created and instance.user_type==CustomUser.UserTypes.PATIENT:
         Patient.objects.create(user=instance)

@receiver(post_save,sender=CustomUser)
def create_uisettings(sender,instance,created,**kwargs):
    if created :
        UiSettings.objects.create(user=instance)

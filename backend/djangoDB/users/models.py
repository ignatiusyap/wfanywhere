import email
import uuid
import json
from merchant.models import Shops
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


# to use json to read webiste data
# import json
#     data = json.loads(request.body)

# If I want to use varchar
# class myCharField(models.Field):
#     def db_type(self, connection):
#         return 'varchar(50)'

# Create your models here.

class AccountManager(BaseUserManager):
    def create_user(self, email, name, surname, occupation, phone_number, user_type, shop_id, password=None):
        if not email:
            raise ValueError('User must have a valid email')

        user = self.model(email=self.normalize_email(email),
                          shop_id=shop_id,
                          user_type=user_type,
                          name=name,
                          surname=surname, occupation=occupation, phone_number=phone_number)
        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, name, surname, password):
        user = self.create_user(
            email=email,
            name=name,
            surname=surname,
            password=password
        )
        user.is_staff = True
        user.is_superuser = True
        user.is_admin = True
        user.save(using=self._db)

        return user


class Type(models.Model):
    userType = models.CharField(max_length=9, primary_key=True)


class Account(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False)
    shop_id = models.ForeignKey(Shops, on_delete=models.SET_NULL, null=True)
    user_type = models.ForeignKey(Type, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=20, null=False)
    surname = models.CharField(max_length=20, null=False)
    phone_number = models.IntegerField()
    occupation = models.CharField(max_length=20)
    email = models.EmailField(max_length=60, unique=True)
    date_joined = models.DateTimeField(
        verbose_name='date joined', auto_now_add=True)
    last_login = models.DateTimeField(verbose_name='last login', auto_now=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = AccountManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'surname']


class Review(models.Model):
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False)
    shop_id = models.ForeignKey(Shops, on_delete=models.SET_NULL, null=True)
    user_id = models.ForeignKey(Account, on_delete=models.SET_NULL, null=True)
    review = models.TextField
    rating = models.IntegerField

import email
import uuid
import json
from merchant.models import Shops
from django.db import models


# to use json to read webiste data
# import json
#     data = json.loads(request.body)

# If I want to use varchar
# class myCharField(models.Field):
#     def db_type(self, connection):
#         return 'varchar(50)'

# Create your models here.


class Type(models.Model):
    userType = models.CharField(max_length=9, primary_key=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)


class Account(models.Model):
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False)
    shop_id = models.ForeignKey(Shops, null=True, on_delete=models.SET_NULL)
    user_type = models.ForeignKey(Type, null=True, on_delete=models.SET_NULL)
    username = models.CharField(max_length=20)
    first_name = models.CharField(max_length=20, null=True)
    last_name = models.CharField(max_length=20, null=True)
    phone_number = models.IntegerField(null=True)
    occupation = models.CharField(max_length=20, null=True)
    email = models.EmailField(max_length=254, null=True)
    date_created = models.DateTimeField(auto_now_add=True, null=True)


class Review(models.Model):
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False)
    shop_id = models.ForeignKey(Shops, null=True, on_delete=models.SET_NULL)
    user_id = models.ForeignKey(Account, null=True, on_delete=models.SET_NULL)
    review = models.TextField(null=True)
    rating = models.IntegerField(null=True)

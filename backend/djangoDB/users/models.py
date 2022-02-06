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
    date_created = models.DateTimeField(auto_now_add=True)


class Account(models.Model):
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False)
    shop_id = models.ForeignKey(Shops, on_delete=models.SET_NULL, null=True)
    user_type = models.ForeignKey(Type, on_delete=models.SET_NULL, null=True)
    username = models.CharField(max_length=20)
    first_name = models.CharField(max_length=20)
    last_name = models.CharField(max_length=20)
    phone_number = models.IntegerField()
    occupation = models.CharField(max_length=20)
    email = models.EmailField(max_length=254)
    date_created = models.DateTimeField(auto_now_add=True)


class Review(models.Model):
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False)
    shop_id = models.ForeignKey(Shops, on_delete=models.SET_NULL, null=True)
    user_id = models.ForeignKey(Account, on_delete=models.SET_NULL, null=True)
    review = models.TextField
    rating = models.IntegerField

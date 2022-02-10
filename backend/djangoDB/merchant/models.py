import uuid
import json
from django.db import models
# Create your models here.


class Shops(models.Model):
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False)
    shop_name = models.CharField(max_length=50)
    description = models.TextField(null=True)
    socket = models.BooleanField(null=True)
    no_of_sockets = models.IntegerField(null=True)
    image_url = models.URLField(max_length=200, null=True)
    is_active = models.BooleanField(default=True)

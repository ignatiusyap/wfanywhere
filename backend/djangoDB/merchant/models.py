import uuid
import json
from django.db import models
# Create your models here.


class Shops(models.Model):
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False)
    shop_name = models.CharField(max_length=50)
    description = models.TextField
    socket = models.BooleanField
    no_of_sockets = models.IntegerField
    image_url = models.TextField

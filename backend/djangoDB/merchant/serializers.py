from rest_framework import serializers
from .models import Shops


class MerchantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shops
        fields = '__all__'

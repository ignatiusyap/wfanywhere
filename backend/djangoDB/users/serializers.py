from rest_framework import serializers
from .models import Account, Review


class AccountSerializer(serializers.ModelSerializer):
    class Meta:
        model = Account
        fields = '__all__'

    def create(self, data):
        UserModel = Account
        User = UserModel.objects.create_user(**data)
        User.save()
        return User


class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'

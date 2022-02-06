from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import MerchantSerializer
from .models import *
from django.http import Http404, HttpResponse
# Create your views here.


class MerchantData(APIView):
    def get(self, request):
        shops = Shops.objects.all()
        serializer = MerchantSerializer(shops, many=True)

        return Response(serializer.data)
 #       return HttpResponse("it works")


class MerchantDetails(APIView):
    def get(self, request, pk):
        shops = Shops.objects.get(id=pk)
        serializer = MerchantSerializer(shops, many=False)

        return Response(serializer.data)

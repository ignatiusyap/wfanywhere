from django.shortcuts import render
import numpy as np
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import MerchantSerializer
from .models import *
from django.http import Http404, HttpResponse
# Create your views here.


class MerchantData(APIView):
    def get(self, request):
        shops = Shops.objects.filter(is_active=True)
        serializer = MerchantSerializer(shops, many=True)

        return Response(serializer.data)
 #       return HttpResponse("it works")


class MerchantDetails(APIView):
    def get(self, request, pk):
        shops = Shops.objects.get(id=pk)
        serializer = MerchantSerializer(shops, many=False)

        return Response(serializer.data)


class MerchantCreate(APIView):
    # pk pass from the front end
    def post(self, request):
        serializer = MerchantSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)

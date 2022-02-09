from argparse import Action
from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import *
from .models import *
from django.http import Http404, HttpResponse


# Create your views here.


class ShopAccountsData(APIView):
    def get(self, request):
        users = Account.objects.filter(is_active=True)
        serializer = AccountSerializer(users, many=True)

        return Response(serializer.data)
 #       return HttpResponse("it works")


class AccountDetails(APIView):
    def get(self, request, pk):
        users = Account.objects.get(id=pk)
        serializer = AccountSerializer(users, many=False)

        return Response(serializer.data)
#        return HttpResponse("it works")


class AccountCreate(APIView):
    def post(self, request):

        serializer = AccountSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response("Account not created")


class ReviewsAll(APIView):
    def get(self, request, pk):
        reviews = Review.objects.filter(
            is_active=True, shop_id=pk)

        serializer = ReviewSerializer(reviews, many=True)

        return Response(serializer.data)

    def post(self, request, pk):
        serializer = ReviewSerializer(data=request.data)
        # serializer.is_valid()
        # print(serializer.errors)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:

            return Response("Account not created")

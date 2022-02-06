from rest_framework.response import Response
from rest_framework.views import APIView
from .serializers import AccountSerializer
from .models import *
from django.http import Http404, HttpResponse


# Create your views here.


class AccountsData(APIView):
    def get(self, request):
        users = Account.objects.all()
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
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        else:
            return Response(False)

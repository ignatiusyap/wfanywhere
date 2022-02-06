from django.urls import path, include
from .import views


urlpatterns = [
    path('all-shops/', views.MerchantData.as_view()),

]

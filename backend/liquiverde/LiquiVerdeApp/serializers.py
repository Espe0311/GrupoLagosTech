from rest_framework import serializers
from rest_framework.serializers import (
    ModelSerializer,
)
from .models import Product, Cart, CartItem


class ProductSerializer(ModelSerializer):

    class Meta:
        model = Product
        fields = ["id", "name", "price", "image_url"]

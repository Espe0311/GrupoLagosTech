from django.contrib import admin
from .models import Product, Cart, CartItem

# Register your models here.


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ("id", "name")
    search_fields = ("id", "name")


@admin.register(Cart)
class CartAdmin(admin.ModelAdmin):
    list_display = ("user", "products_count")
    search_fields = ["user"]

    def products_count(self, obj):
        return obj.items.count()

    products_count.short_description = "Products"


@admin.register(CartItem)
class CartItemAdmin(admin.ModelAdmin):
    list_display = ("cart", "product")
    search_fields = ("cart", "product")

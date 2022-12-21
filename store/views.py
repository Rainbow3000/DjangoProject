
from django.shortcuts import render
from django.http import HttpResponse
from .models import *
# Create your views here.

def index(request):
    product_discount = Product.objects.filter(category_id = 4)
    product_fashion = Product.objects.filter(category_id = 1)
    product_sport = Product.objects.filter(category_id = 3)
    product_elec = Product.objects.filter(category_id = 2)
    context = {
        'product_discount':product_discount, 
        'product_fashion':product_fashion, 
        'product_sport':product_sport, 
        'product_elec':product_elec,
    }
    return render(request,'pages/home.html',context)

def details(request,slug):
    _id = int(slug); 
    product = Product.objects.filter(id = _id)
    context = {
        'product':product
    }
    return render(request,'pages/details.html',context)

def cart(request):
    return render(request,'pages/cart.html')

def order(request):
    return render(request,'pages/order.html')

def success(request):
    return render(request,'pages/success.html')

def login(request):
    return render(request,'pages/login.html')

def register(request):
    return render(request,'pages/register.html')
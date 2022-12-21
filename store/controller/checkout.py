from django.shortcuts import render,redirect
from django.http import HttpResponse,JsonResponse
from store.forms import CustomUserForm
from django.contrib import messages
from store.models import Product,Cart,Order,OrderItem





def truncate(n, decimals=0):
    multiplier = 10 ** decimals
    return int(n * multiplier) / multiplier


def checkoutpage(request):
    if request.user.is_authenticated:
        cart = Cart.objects.filter(user=request.user) 
        total_price = 0
        for item in cart:
            total_price = total_price + (float(item.product_qty) * (item.product.selling_price))
        context = {'cart':cart,'totalPrice':truncate(total_price,2)}
    else:
        return JsonResponse({'status':'Please login to continue !'})
    
    return render(request,'pages/checkout.html',context)


def checkoutimplement(request):
    if request.method == 'POST':
        if request.user.is_authenticated:
             newOrder = Order(); 
             newOrder.uname = request.POST.get('username')
             newOrder.uphone = request.POST.get('userphone')
             newOrder.uaddress = request.POST.get('useraddress')
             newOrder.totalprice =  request.POST.get('totalprice')  
             newOrder.user = request.user         
             newOrder.save(); 
             cart = Cart.objects.filter(user=request.user) 
             for item in cart:
                    newProduct = Product(); 
                    newProduct.id = item.product_id
                    OrderItem.objects.create(order = newOrder,product = newProduct,price = item.product.selling_price,quantity=item.product_qty)
             Cart.objects.all().delete(); 
             return JsonResponse({'status':'Order success !'})
    else:
        return JsonResponse({'status':'Please login to continue !'})
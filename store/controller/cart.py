
from django.shortcuts import render,redirect
from django.http import HttpResponse,JsonResponse
from store.forms import CustomUserForm
from django.contrib import messages
from store.models import Product,Cart

def addtocart(request):
    if request.method == 'POST':
        if request.user.is_authenticated:
            prod_id = int(request.POST.get('product_id'))
            product_check = Product.objects.get(id = prod_id)
            if product_check:
               if(Cart.objects.filter(user=request.user.id,product_id=prod_id)):
                    return JsonResponse({'status':'Product Already In Cart !'})
               else:
                    prod_qty = int (request.POST.get('product_qty'))
                    if product_check.quantity >= prod_qty:
                        Cart.objects.create(user=request.user,product_id=prod_id,product_qty=prod_qty)
                        return JsonResponse({'status':'Product added successfully !'})
                    else:
                        return JsonResponse({'status':'Only ' + str(product_check.quantity) + " quantity available"})
            else:
                return JsonResponse({'status':'No such product found !'})
        else:
            return JsonResponse({'status':'Please login to continue !'})
    return redirect('/')


def truncate(n, decimals=0):
    multiplier = 10 ** decimals
    return int(n * multiplier) / multiplier

def viewcart(request):
    cart = Cart.objects.filter(user=request.user)
    total_price = 0
    count = 0
    for item in cart:
        count = count + 1
        total_price = total_price + (float(item.product_qty) * (item.product.selling_price))
    context = {'cart':cart, 'totalPrice':truncate(total_price,2),'count':count}
    return render(request,'pages/cart.html',context)


def updatecart(request):
    if request.method == 'POST':
        if request.user.is_authenticated:
            cart_id = int(request.POST.get('cartId'))
            cart_qty = int(request.POST.get('cartQty'))
            cart_item= Cart.objects.get(id = cart_id); 
            if cart_item:
                cart_item.product_qty = cart_qty; 
                cart_item.save(); 
                return JsonResponse({'status':'Updated cart successfully !'}) 

def deletecart(request):
    if request.method == 'POST':
        if request.user.is_authenticated:
            cart_id = int(request.POST.get('cartId'))
            cart_item= Cart.objects.get(id = cart_id)
            if cart_item:
                cart_item.delete(); 
                return JsonResponse({'status':'deleted cart successfully !'})
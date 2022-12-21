from django.urls import path
from . import views
from store.controller import authview,cart,checkout

urlpatterns = [
    path('',views.index),
    path('details/<str:slug>',views.details,name="details"),
    path('addcart',cart.addtocart,name="addtocart"),
    path('viewcart',cart.viewcart,name="viewcart"),
    path('updatecart',cart.updatecart,name="updatecart"),
    path('deletecart',cart.deletecart,name="deletecart"), 
    path('checkout',checkout.checkoutpage,name="checkoutpage"),
    path('checkoutimplement',checkout.checkoutimplement,name="checkoutimplement"),
    path('order',views.order),
    path('success',views.success),
    path('login',authview.loginpage,name="login"),
    path('register/',authview.register,name="register"),
    path('logout',authview.logoutpage,name="logout"),
]

import datetime
from django.db import models

from django.contrib.auth.models import User

import os
# Create your models here.

def get_file_path(request,filename):
    original_filename = filename
    nowTime = datetime.datetime.now().strftime('%Y%m%d%H:%M:$S')
    filename = "%s%s" % (nowTime,original_filename)
    return os.path.join('uploads/',filename)


class Category(models.Model):
    name = models.CharField(max_length=150,null = False, blank=False)
    image = models.ImageField(upload_to=get_file_path, null=False,blank=False)
    status = models.BooleanField(default=False,help_text="0=default,1=Hidden")
    created_at = models.DateTimeField(auto_now=True)
    def __str__(seft):
        return seft.name



class Product(models.Model):
    category = models.ForeignKey(Category,on_delete=models.CASCADE)
    name = models.CharField(max_length=150,null=False,blank=False)
    product_image = models.ImageField(upload_to=get_file_path,null=True,blank=True)
    description = models.TextField(max_length=150,null=False,blank=False)
    status = models.BooleanField(default=False,help_text="0=default,1=Hidden")
    quantity = models.IntegerField(null=False,blank=False)
    origin_price = models.FloatField(null=False,blank=False)
    selling_price = models.FloatField(null=False,blank=False) 
    created_at = models.DateTimeField(auto_now=True)
    def __str__(seft):
        return seft.name


class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    product_qty = models.IntegerField(null=False,blank=False)
    created_at = models.DateTimeField(auto_now_add=True)


class Order(models.Model):
    user = models.ForeignKey(User,on_delete=models.CASCADE)
    uname = models.CharField(max_length=200,null=False)
    uphone = models.CharField(max_length=200,null=False)
    uaddress = models.CharField(max_length=200,null=False)
    totalprice = models.FloatField(null=False)
    statuses = (
        ('Pending','Pending'),
        ('Shipping','Shipping'),
        ('Completed','Completed'),
    )
    status = models.CharField(max_length=200,choices=statuses,default='Pending')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now_add=True)

class OrderItem (models.Model):
    order = models.ForeignKey(Order,on_delete=models.CASCADE)
    product = models.ForeignKey(Product,on_delete=models.CASCADE)
    price = models.FloatField(null=False)
    quantity = models.IntegerField(null=False)


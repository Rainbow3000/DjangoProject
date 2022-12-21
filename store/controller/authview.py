

from django.shortcuts import render,redirect
from django.http import HttpResponse
from store.forms import CustomUserForm
from django.contrib import messages
from django.contrib.auth import authenticate,login,logout


def register (request):
    form = CustomUserForm()
    if request.method == 'POST':
        form = CustomUserForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request,"Registered success.Login now ! ")
            return redirect('/login')
    context = {
        'form':form
    }
    return render(request,'pages/register.html',context)

def loginpage (request):
    if request.user.is_authenticated:
        messages.warning(request,"Your are already logged in !")
        return redirect('/')
    if request.method == 'POST':
        name = request.POST.get('username')
        passwd = request.POST.get('password')
        user = authenticate(request,username = name, password = passwd)
        if user is not None:
            login(request, user)
            messages.success(request,'logged is successfully !')
            return redirect('/')
        else:
            messages.error(request,"Invalid Username or Password")
            return redirect('/login')
    context = {}
    return render(request,'pages/login.html',context)

def logoutpage(request):
    if request.user.is_authenticated:
        logout(request)
        messages.success(request,'Logged out is successfully !')
    return redirect('/')

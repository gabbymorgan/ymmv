from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def index(request):
    return HttpResponse("Hello, friend. You are in the base directory of a wonderful API. More documentation coming soon maybe.")

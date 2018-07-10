from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Food(models.Model):
    brand = models.CharField(max_length=100)
    item = models.CharField(max_length=100)
    description = models.CharField(max_length=500)
    lite_rating = models.FloatField()
    moderate_rating = models.FloatField()
    severe_rating = models.FloatField()

class Report(models.Model):
    food = models.ForeignKey(Food, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    reaction = models.IntegerField(max_value=10)
    created_on = models.DateField(auto_now=True)
    
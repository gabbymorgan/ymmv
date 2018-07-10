from rest_framework import serializers, viewsets
from .models import Food, Report

class FoodSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Food
        fields = ('brand', 'item', 'description')

class FoodViewset(viewsets.ModelViewSet):
    serializer_class = FoodSerializer
    queryset = Food.objects.all()

class ReportSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Report
        fields = ('food', 'reaction')

class ReportSerializer(viewsets.ModelViewSet):
    serializer_class = FoodSerializer
    queryset = Report.objects.all()

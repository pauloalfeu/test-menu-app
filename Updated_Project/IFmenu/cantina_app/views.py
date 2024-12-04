from django.shortcuts import render
# Create your views here.
from rest_framework import viewsets, status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from .models import CustomUser, Produto, ItemPedido, Pedido
from .serializers import CustomUserSerializer, ProdutoSerializer, ItemPedidoSerializer, PedidoSerializer

class CustomUserViewSet(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = CustomUserSerializer

    
class ProdutoViewSet(viewsets.ModelViewSet):
    queryset = Produto.objects.all()
    serializer_class = ProdutoSerializer


    # Você pode sobrescrever métodos para validação customizada
    # def create(self, request, *args, **kwargs):
    #     # ... sua lógica de validação ...
    #     return super().create(request, *args, **kwargs)

class ItemPedidoViewSet(viewsets.ModelViewSet):
    queryset = ItemPedido.objects.all()
    serializer_class = ItemPedidoSerializer

    
class PedidoViewSet(viewsets.ModelViewSet):
    queryset = Pedido.objects.all()
    serializer_class = PedidoSerializer
 

    # Você pode sobrescrever métodos para validação customizada
    # def create(self, request, *args, **kwargs):
    #     # ... sua lógica de validação ...
    #     return super().create(request, *args, **kwargs)
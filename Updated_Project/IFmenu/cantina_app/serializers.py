from rest_framework import serializers
from django.contrib.auth.models import User

from .models import Produto, CustomUser, ItemPedido, Pedido

# Definindo o UserSerializer primeiro
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email')

# Agora, herdando de UserSerializer
class CustomUserSerializer(UserSerializer):
    contato = serializers.CharField(required=False)

    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'contato', 'is_manager')

class ProdutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produto
        fields = '__all__'

class ItemPedidoSerializer(serializers.ModelSerializer):
    produto = ProdutoSerializer(read_only=True)

    class Meta:
        model = ItemPedido
        fields = ('id', 'produto', 'quantidade')

class PedidoSerializer(serializers.ModelSerializer):
    cliente = CustomUserSerializer(read_only=True)
    itens_pedidos = ItemPedidoSerializer(many=True, read_only=True)

    class Meta:
        model = Pedido
        fields = ('id', 'cliente', 'status', 'valor_total', 'data_pedido', 'itens_pedidos')
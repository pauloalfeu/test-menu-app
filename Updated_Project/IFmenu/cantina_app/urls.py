from django.conf.urls.static import static
from django.urls import path, include
from rest_framework import routers

from IFmenu import settings

from .views import CustomUserViewSet, ItemPedidoViewSet, PedidoViewSet, ProdutoViewSet

router = routers.DefaultRouter()

router.register('usuarios', CustomUserViewSet)
router.register('produtos', ProdutoViewSet)
router.register('pedidos', PedidoViewSet)
router.register('itens-pedidos', ItemPedidoViewSet)  # Opcional, considere incluir dentro de PedidoViewSet

urlpatterns = [
    path('', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
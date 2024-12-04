// Função para buscar os dados da API e renderizar os produtos
function buscarProdutos() {
    fetch('http://127.0.0.1:8000/api/menuapp/produto/') // Substitua pela URL da sua API
        .then(response => response.json())
        .then(data => {
            const produtosContainer = document.querySelector('.row');
            data.forEach(produto => {
                const card = document.createElement('div');
                card.classList.add('col-md-2'); // Cada produto ocupará 1/3 da largura em telas médias

                card.innerHTML = `
                    <div class="card h-100 ">
                        <img src="${produto.img_prod}" class="card-img-top img-fluid" style="max-height: 150px; alt="${produto.nome_prod}">
                        <div class="card-body card-body d-flex flex-column">
                            <h5 class="card-title">${produto.nome_prod}</h5>
                            <p class="card-text">${produto.descricao_prod}</p>
                            <div class="mt-auto">
                            <div class="d-flex justify-content-between align-items-center mb-3">
                                <h5 class="card-text">R$ ${produto.preco_prod.toFixed(2)}</h5>
                                <input type="number" min="0" value="0" class="form-control" style="width: 50px;">
                            </div>
                            </div>
                            <div class="">
                                <button class="btn meu-botao ">Adicionar ao Carrinho</button>
                            </div>
                        </div>
                    </div>
                `;

                produtosContainer.appendChild(card);
            });
        })
        .catch(error => {
            console.error('Erro ao buscar produtos:', error);
        });
}

// Chamar a função ao carregar a página
buscarProdutos();


    window.addEventListener('load', () => {
      const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
      myModal.show();
    });

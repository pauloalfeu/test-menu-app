
function adminDados(event) {
    event.preventDefault(); // Evita o reload da página
    const login = document.getElementById("nome").value;
    const senha = document.getElementById("contato").value;
  
    const dados = {
        login: login,
        senha: senha
    };
  
        fetch('http://127.0.0.1:8000/api/menuapp/gerente/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data => {
            // Chama a função para renderizar os dados na tabela
            console.log(data)
            buscaSenha(data);
        })
        .catch(error => {
            console.error('Erro ao buscar dados:', error);
            alert("Erro ao carregar dados.");
        });
    

    // Função para comparar o login com os dados obtidos da API
    function buscaSenha(dados) {
        // Verifica se algum item da lista possui login e senha correspondentes
        const usuarioEncontrado = dados.find(item => {
            return item.login === login && item.senha === senha;
        });
    
        if (usuarioEncontrado) {
            // Usuário encontrado, realizar alguma ação, como redirecionar para outra página
            window.location.href = 'produtos_cliente.html'; // Substitua pela URL desejada
        } else {
            // Usuário não encontrado, exibir mensagem de erro
            console.log("Usuário não encontrado.");
            alert("Login ou senha inválidos.");
        }
    }
    
};
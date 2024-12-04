

function salvarDados(event) {
  event.preventDefault(); // Evita o reload da página
  const nome = document.getElementById("nome").value;
  const contato = document.getElementById("contato").value;

  const dados = {
      nome: nome,
      contato: contato
  };

  /* Faz a chamada da api para insercao */
  fetch('http://127.0.0.1:8000/api/menuapp/cliente/', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify(dados)
  })
  .then(response => response.json())
  .then(data => {
      console.log('Success:', data);
      window.location.href = 'produtos_cliente.html';
  })
  .catch((error) => {
      console.error('Error:', error);
      alert("Erro ao enviar dados.");
  });
}



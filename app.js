//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = []
//Função para adicionar amigos
function adicionarAmigo() {
  let input = document.getElementById("nomeAmigo");
  let nome = input.value.trim();

  if (nome === "") {
    alert("Digite um nome válido!");
    return;

    //Adiciona o nome no array
    amigos.push(nome);

    //Atualiza a lista exibida
    let lista = document.getElementById("listaAmigos");
    let item = document.createElement("li");
    item.textContent = nome;
    lista.appendChild(item);

    //Limpa o campo de entrada
    input.value = "";
  }


}

<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Lista de Amigos</title>
</head>
<body>
  <h1>Adicionar Amigos</h1>

  <!-- Campo de entrada -->
  <input type="text" id="nomeAmigo" placeholder="Digite o nome do amigo">
  <button onclick="adicionarAmigo()">Adicionar</button>

  <!-- Lista de amigos -->
  <ul id="listaAmigos"></ul>

  <script>
    // Array que vai armazenar os nomes
    let amigos = [];

    function adicionarAmigo() {
      // Captura o campo de entrada
      let input = document.getElementById("nomeAmigo");
      let nome = input.value.trim();

      // Validação
      if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
      }

      // Adiciona ao array
      amigos.push(nome);

      // Atualiza a exibição da lista
      exibirAmigos();

      // Limpa o campo
      input.value = "";
    }

    function exibirAmigos() {
      // 1. Obter o elemento da lista
      let lista = document.getElementById("listaAmigos");

      // 2. Limpar a lista existente
      lista.innerHTML = "";

      // 3. Percorrer o array de amigos
      for (let i = 0; i < amigos.length; i++) {
        // 4. Criar um <li> para cada amigo
        let item = document.createElement("li");
        item.textContent = amigos[i];

        // Adicionar o <li> na lista
        lista.appendChild(item);
      }
    }
  </script>
</body>
</html>


<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Lista de Amigos</title>
</head>
<body>
  <h1>Adicionar e Sortear Amigos</h1>

  <!-- Campo de entrada -->
  <input type="text" id="nomeAmigo" placeholder="Digite o nome do amigo">
  <button onclick="adicionarAmigo()">Adicionar</button>
  <button onclick="sortearAmigo()">Sortear Amigo</button>

  <!-- Lista de amigos -->
  <ul id="listaAmigos"></ul>

  <!-- Resultado do sorteio -->
  <p id="resultado"></p>

  <script>
    // Array que vai armazenar os nomes
    let amigos = [];

    function adicionarAmigo() {
      let input = document.getElementById("nomeAmigo");
      let nome = input.value.trim();

      if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
      }

      amigos.push(nome);
      exibirAmigos();
      input.value = "";
    }

    function exibirAmigos() {
      let lista = document.getElementById("listaAmigos");
      lista.innerHTML = "";

      for (let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
      }
    }

    function sortearAmigo() {
      // 1. Validar que há amigos disponíveis
      if (amigos.length === 0) {
        alert("A lista de amigos está vazia! Adicione pelo menos um nome.");
        return;
      }

      // 2. Gerar um índice aleatório
      let indiceAleatorio = Math.floor(Math.random() * amigos.length);

      // 3. Obter o nome sorteado
      let amigoSorteado = amigos[indiceAleatorio];

      // 4. Mostrar o resultado
      let resultado = document.getElementById("resultado");
      resultado.innerHTML = "🎉 Amigo sorteado: <strong>" + amigoSorteado + "</strong>";

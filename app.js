function pesquisarBairro() {
  const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  const resultadosSection = document.getElementById("resultados-pesquisa");

  if (!campoPesquisa) {
    resultadosSection.innerHTML = "<p class='aviso-erro'>Você não digitou um bairro</p>";
    return;
  }

  const resultados = dados.filter(dado => {
    const { titulo, descricao, tags } = dado;
    // Adaptar a lógica de busca conforme a estrutura dos seus dados
    return titulo.toLowerCase().includes(campoPesquisa) ||
           descricao.toLowerCase().includes(campoPesquisa) ||
           tags.toLowerCase().some(tag => tag.includes(campoPesquisa)); // Se tags for um array
  });

  let htmlResultados = "";

  if (resultados.length === 0) {
    htmlResultados = "<p class='aviso-sem-capinadores'>Bairro sem capinadores cadastrados</p>";
  } else {
    // ... restante do código para exibir os resultados
    resultados.forEach(dado => {
      // ...
    });
  }

  resultadosSection.innerHTML = htmlResultados;
}

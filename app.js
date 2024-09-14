function pesquisarBairro() {
  const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  const resultadosSection = document.getElementById("resultados-pesquisa");

  // Verificação para garantir que o usuário digitou algo
  if (!campoPesquisa) {
    resultadosSection.innerHTML = "<p class='aviso-erro'>Você não digitou um bairro</p>";
    return;
  }

  // Filtra os resultados comparando apenas o título com o bairro pesquisado
  const resultados = dados.filter(dado => {
  return dado.bairro.toLowerCase() === campoPesquisa;
    return titulo.toLowerCase() === campoPesquisa; // Verificação de igualdade estrita
  });

  let htmlResultados = "";

  // Se encontrar capinadores cadastrados no bairro
  if (resultados.length > 0) {
    resultados.forEach(dado => {
      htmlResultados += `
        <div class="item-resultado">
          <img src="${dado.imagem}" alt="${dado.titulo}">
          <h2>${dado.titulo}</h2>
          <p class="descricao-meta">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">Agende um serviço</a>
        </div>
      `;
    });
  } else {
    // Se não houver capinadores cadastrados no bairro
    htmlResultados = "<p class='aviso-sem-capinadores'>Bairro sem capinadores cadastrados</p>";
  }

  // Exibe os resultados
  resultadosSection.innerHTML = htmlResultados;
}

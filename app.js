function pesquisarBairro() {
  console.log('Função pesquisarBairro chamada');
  const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  const resultadosSection = document.getElementById("resultados-pesquisa");

  if (!campoPesquisa) {
    resultadosSection.innerHTML = "<p class='aviso-erro'>Você não digitou um bairro</p>";
    return;
  }

  const resultados = dados.filter(dado => {
    return dado.bairro.toLowerCase() === campoPesquisa;
    // const { titulo, descricao, tags } = dado; // Essa parte estava desnecessária para o filtro atual
    // return titulo.toLowerCase().includes(campoPesquisa) ||
    //        descricao.toLowerCase().includes(campoPesquisa) ||
    //        tags.toLowerCase().includes(campoPesquisa);
  });

  console.log('Resultados da pesquisa:', resultados);

  let htmlResultados = "";

  if (resultados.length === 0) {
    htmlResultados = "<p class='aviso-sem-capinadores'>Bairro sem capinadores cadastrados</p>";
  } else {
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
  }

  resultadosSection.innerHTML = htmlResultados;
  console.log('Resultados atualizados no mobile:', htmlResultados);
  console.log('HTML gerado:', htmlResultados);
}

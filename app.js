function pesquisarBairro() {
  const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  const resultadosSection = document.getElementById("resultados-pesquisa");

  if (!campoPesquisa) {
    resultadosSection.innerHTML = "<p class='aviso-erro'>Você não digitou um bairro</p>";
    return;
}


  const resultados = dados.filter(dado => {
      const { titulo, descricao, tags } = dado;
      return titulo.toLowerCase().includes(campoPesquisa) ||
             descricao.toLowerCase().includes(campoPesquisa) ||
             tags.toLowerCase().includes(campoPesquisa);
  });

  let htmlResultados = "";

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
      htmlResultados = "<p class='aviso-sem-capinadores'>Seu bairro ainda não possui capinadores cadastrados</p>";
    };
    resultadosSection.innerHTML = htmlResultados;
}

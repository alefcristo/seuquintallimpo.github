function pesquisarBairro() {
  console.log('Função pesquisarBairro chamada'); // Para verificar se a função está sendo executada no mobile
  const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  const resultadosSection = document.getElementById("resultados-pesquisa");

  if (!campoPesquisa) {
    resultadosSection.innerHTML = "<p class='aviso-erro'>Você não digitou um bairro</p>";
    return;
  }

  const resultados = dados.filter(dado => {
    return dado.bairro.toLowerCase() === campoPesquisa;
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
    htmlResultados = "<p class='aviso-sem-capinadores'>Bairro sem capinadores cadastrados</p>";
  }

  resultadosSection.innerHTML = htmlResultados;
  console.log('Resultados atualizados no mobile:', htmlResultados); // Log para verificar o resultado
}

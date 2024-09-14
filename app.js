function pesquisarBairro() {
  const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase();
  const resultadosSection = document.getElementById("resultados-pesquisa");

  if (!campoPesquisa) {
    resultadosSection.innerHTML = "<p class='aviso-erro'>Você não digitou um bairro</p>";
    return;
  }

  const resultados = dados.filter(dado => {
    const { titulo, descricao, tags } = dado;
    const termosBusca = campoPesquisa.split(' '); // Permite buscar por múltiplas palavras

    return termosBusca.some(termo =>
      titulo.toLowerCase().includes(termo) ||
      descricao.toLowerCase().includes(termo) ||
      tags.toLowerCase().includes(termo)
    );
  });

  let htmlResultados = "";

  if (resultados.length === 0) {
    htmlResultados = "<p class='aviso-sem-capinadores'>Bairro sem capinadores cadastrados</p>";
  } else {
    // ... restante do código para exibir os resultados
  }

  resultadosSection.innerHTML = htmlResultados;
}

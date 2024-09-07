function pesquisarBairro () {
    let section = document.getElementById
    ("resultados-pesquisa");

    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value

    if (campoPesquisa == "") {
    section.innerHTML = "<p>Você não digitou um bairro</p>"
    return
    }
    
campoPesquisa = campoPesquisa.toLowerCase ()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()

     if  (titulo.includes(campoPesquisa) || descricao.
     includes(campoPesquisa) || tags.includes
    (campoPesquisa))
        {resultados += `
        <div class="item-resultado">
        <h2> 
        ${dado.titulo}
            </h2>
        <P class="descricao-meta"> ${dado.descricao} </P>
        <a href=${dado.link} target="_blank">Agende um serviço</a>
      </div>
      `
     }
        
     if (!resultados) {
        resultados = "<p>Seu bairro ainda não possui capinadores cadastrados</p>"
    }

    }
    
    section.innerHTML = resultados
    
}


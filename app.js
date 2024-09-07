function pesquisarBairro () {let section = document.getElementById("resultados-pesquisa")

    
    let resultados = ""
    
    for (let dado of dados) {
        resultados += `
        <div class="item-resultado">
        <h2> 
        ${dado.titulo}
            </h2>
        <P class="descricao-meta"> ${dado.descricao} </P>
        <a href=${dado.link} target="_blank">Agende um serviço</a>
      </div>
      `
    }
    
    section.innerHTML = resultados
    
}




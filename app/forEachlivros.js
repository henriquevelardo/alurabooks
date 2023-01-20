const elementoIncluirLivros = document.getElementById('livros')
const elementoLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

function exibirLivrosTela(listaDeLivros){
    //limpa o conteudo para os filtrados
    elementoIncluirLivros.innerHTML = ''
    elementoLivrosDisponiveis.innerHTML = ''
    listaDeLivros.forEach(livro => {
        //let disponibilidade = verificaDisponibilidade(livro)

        //verifica disponilidade utilizando operador Ternario
        let disponibilidade =  livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel'
        elementoIncluirLivros.innerHTML += `
        <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}" />
            <h2 class="livro__titulo">${livro.titulo}</h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$ ${livro.preco.toFixed(2)}</p>
            <div class="tags">
                <span class="tag">${livro.categoria}</span>
            </div>
        </div>

        `
    });
}

//verifica quantidade dos livros para ver disponibilidadee
function verificaDisponibilidade(livro){
    if(livro.quantidade > 0 ){
        return 'livro__imagens'
    } else {
        return 'livro__imagens indisponivel'
    }
}
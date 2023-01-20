const botoes = document.querySelectorAll('.btn')

botoes.forEach(btn => btn.addEventListener('click', filtrarLivros))



function filtrarLivros(){
    //pega o id do elemento clicado
    const elementoBTN = document.getElementById(this.id)
    
    const categoria = elementoBTN.value
    let livrosFiltrados = categoria == 'disponivel' ? filtrarDisponiveis() : filtrarCategorias(categoria)
    exibirLivrosTela(livrosFiltrados)
    if(categoria == 'disponivel'){
        const valorTotalDisponiveis = calculaValorTotalDisponiveis(livrosFiltrados)
        exibirValorTotalDisponiveis(valorTotalDisponiveis)
    }

}




function filtrarCategorias(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarDisponiveis() {
    return livros.filter(livro => livro.quantidade > 0)
}


function exibirValorTotalDisponiveis(valorTotalDisponiveis){
    elementoLivrosDisponiveis.innerHTML = `
    <div class="livros__disponiveis">
        <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotalDisponiveis}</span></p>
    </div>
    `
}


//categoria == 'disponivel' ? livros.filter(livro => livro.quantidade > 0) -> trecho que verifica se itens estao disponiveis pelo filtro livros disponivels


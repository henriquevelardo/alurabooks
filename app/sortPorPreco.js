let ordemPreco = document.getElementById('btnOrdenarPorPreco')

ordemPreco.addEventListener('click', ordenarPorPreco)


function ordenarPorPreco(){
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    console.table(livrosOrdenados)
    exibirLivrosTela(livrosOrdenados)
}
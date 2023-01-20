let livros = [];

const endPointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'


getBuscaLivrosAPI()

async function getBuscaLivrosAPI(){
    const res = await fetch (endPointAPI)
    livros = await res.json()
    let livrosComDesconto = aplicarDesconto(livros)
    exibirLivrosTela(livrosComDesconto)
}









//Codigo chamando API utilizando Then para mostrar na tela e tratamento de erros com throw e catch

/**var consultaCep = fetch('https://viacep.com.br/ws/02722132/json/').then(resposta => resposta.json())
.then(resposta => {
    if(resposta.erro){
        throw Error ('cep nao encontrado!')
    }else{
    console.log(resposta)}
})
.catch(erro => console.log(erro))
.finally(mensagem => console.log('Processaimento realizado!'))

console.log(consultaCep)*/

//********************************************************************************************* */

//Codigo fazendo varias promises, promise all, para jogar em um array e resolver varias requisicoes

/**let cep = ['01001000', '01001001']
let conjuntoCeps = cep.map(valores => buscaEndereco(valores))
Promise.all(conjuntoCeps).then(respostas => console.log(respostas)) **/

//********************************************************************************************* */

//Codigo fazendo o mesmo, porem utilizando funcao assincrona c/ tratamento de erro try catch

async function buscaEndereco(cep){
    var mensagemErro = document.getElementById('erro')
    mensagemErro.innerHTML = ''

    try {
        var consultaCep = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        var consultaCepConvertido = await consultaCep.json()
        if(consultaCepConvertido.erro){
            throw Error ('CEP inexistente!')
        }
        var endereco =  document.getElementById('endereco')
        var cidade = document.getElementById('cidade')
        var estado = document.getElementById('estado')
        var bairro =  document.getElementById('bairro')

        endereco.value = consultaCepConvertido.logradouro
        bairro.value = consultaCepConvertido.bairro
        cidade.value = consultaCepConvertido.localidade
        estado.value = consultaCepConvertido.uf

        console.log(consultaCepConvertido)
        return consultaCepConvertido
    }catch(erro){
        mensagemErro.innerHTML = `<p>CEP Invalido. Tente novamente!</p>`
    }
}

var cep = document.getElementById('cep')
cep.addEventListener('focusout', ()=> buscaEndereco(cep.value))














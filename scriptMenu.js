var meuPerfil = document.getElementById('perfil')
var perfil = document.querySelector('.box-perfil')

meuPerfil.addEventListener('click', () => {
    console.log('clicou')
    perfil.classList.toggle('box-perfil--ativo')
})
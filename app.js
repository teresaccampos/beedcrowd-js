const h1 = document.querySelector('.teste')
const div = document.querySelector('#app')
const body = document.querySelector('body')

h1.addEventListener('click', () =>{
    h1.innerHTML = `<h1>Mudei no JavaScript</h1>`
})

function mudar() {
    body.classList.add('imagem')
}
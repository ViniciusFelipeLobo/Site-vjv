
const botao = document.querySelector('button');
const usuario = document.querySelector('span#usuario');
botao.addEventListener('click', () => {
    let nome = document.querySelector('input').value;
    localStorage.setItem('nome', nome);
    window.location.href = 'pagina2.html';});
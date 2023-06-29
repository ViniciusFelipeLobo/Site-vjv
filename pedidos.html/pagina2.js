let nomeArmazenado = localStorage.getItem('nome');
const usuario = document.querySelector('span#usuario');
usuario.textContent = nomeArmazenado;
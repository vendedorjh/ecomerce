const navbar = document.querySelector('.navbar');  // Seleciona o elemento da barra de navegação com a classe 'navbar'
const botaoMenu = document.querySelector('.botao-menu');  // Seleciona o botão de menu com a classe 'botao-menu'

// Adiciona um evento de clique ao botão de menu
botaoMenu.addEventListener('click', () => {
    navbar.classList.toggle('show-menu');  // Alterna a classe 'show-menu' na barra de navegação
});

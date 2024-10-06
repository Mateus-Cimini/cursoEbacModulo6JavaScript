// Selecionando um elemento pelo ID
let titulo = document.getElementById('titulo-principal'); 
console.log(titulo);  // Exibe o elemento <h1> no console

// Alterando o texto de um elemento selecionado pelo ID
titulo.textContent = 'Novo Título Principal';  // Muda o texto do <h1>

// Selecionando elementos pela classe (pega todos os elementos com a classe 'paragrafo')
let paragrafos = document.getElementsByClassName('paragrafo'); 
console.log(paragrafos);  // Exibe uma HTMLCollection com os parágrafos

// Alterando o texto do primeiro parágrafo com a classe 'paragrafo'
paragrafos[0].textContent = 'Este é o novo primeiro parágrafo';  // Muda o texto do primeiro <p>

// Selecionando todos os parágrafos com querySelectorAll (pega todos os <p> com a classe 'paragrafo')
let todosParagrafos = document.querySelectorAll('.paragrafo');
console.log(todosParagrafos);  // Exibe uma NodeList com todos os parágrafos

// Selecionando um elemento específico usando querySelector (pega apenas o primeiro que encontra)
let paragrafoUnico = document.querySelector('#paragrafo-unico');
console.log(paragrafoUnico);  // Exibe o parágrafo dentro da <div>

// Alterando o texto do parágrafo selecionado pelo querySelector
paragrafoUnico.textContent = 'Texto alterado no parágrafo único!';

// Selecionando o botão pelo ID e adicionando um evento de clique
let botao = document.getElementById('meu-botao');
botao.addEventListener('click', function() {
    alert('Você clicou no botão!');  // Exibe um alerta quando o botão é clicado
});

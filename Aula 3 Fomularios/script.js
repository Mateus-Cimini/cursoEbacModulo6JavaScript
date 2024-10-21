let nome = document.getElementById('inputName');
let botao = document.getElementById('btn');


nome.addEventListener('input', function () {
    botao.disabled = nome.value.trim().split(/\s+/).length < 3;
});


let valor = document.getElementById('inputValue');

valor.value = 1000
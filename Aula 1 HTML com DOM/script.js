let texto = document.getElementById('text');
let botao = document.getElementById('btn');

botao.addEventListener('click', function() {
    texto.textContent = 'MUDOU';
});
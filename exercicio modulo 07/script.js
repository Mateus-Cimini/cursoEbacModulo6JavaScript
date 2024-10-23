const form = document.getElementById('formMain');
const inputNum1 = document.getElementById('inputN1');
const inputNum2 = document.getElementById('inputN2');
const mensagemCerta = `O numero do <b>campo B</b> é maior que o numero do <b>campo A</b>`;
const mensagemErrada = `O numero do <b>campo B</b> deve ser maior que o numero do <b>campo A</b>, tente novamente`;

function validNumber(num1, num2) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    const containerMessagemSucesso = document.querySelector('.messageSuccess');

    if (num1 > num2) {
        containerMessagemSucesso.innerHTML = mensagemErrada
        containerMessagemSucesso.style.display = 'block';
        containerMessagemSucesso.style.backgroundColor = 'red';
        return false;
    } else {
        containerMessagemSucesso.innerHTML = mensagemCerta
        containerMessagemSucesso.style.display = 'block'
        containerMessagemSucesso.style.backgroundColor = 'greenyellow'
        return true;
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evita que o formulário seja enviado
    const num1 = inputNum1.value; // Obtém o valor do input A
    const num2 = inputNum2.value; // Obtém o valor do input B
    
    const isValid = validNumber(num1, num2); // Chama a função passando os valores

    if (isValid) {
        // Limpa os campos de input se a validação for bem-sucedida
        inputNum1.value = '';
        inputNum2.value = '';
    }
});

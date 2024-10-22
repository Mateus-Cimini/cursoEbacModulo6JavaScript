const form = document.getElementById('formDeposito');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ').filter(nome => nome.trim().length > 0);
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

    const nomeBeneficiario = document.getElementById('inputName');
    const numeroContaBeneficiario = document.getElementById('inputNumber');
    const valorDeposito = document.getElementById('inputValue');
    const valorFormatado = parseFloat(valorDeposito.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    const mensagemSucesso = `Montante de: ${valorFormatado} depositado para o cliente: ${nomeBeneficiario.value} - conta: ${numeroContaBeneficiario.value}`;

    formEValido = validaNome(nomeBeneficiario.value);
    if (formEValido) {
        alert(mensagemSucesso);

        nomeBeneficiario.value = ''
        numeroContaBeneficiario.value = ''
        valorDeposito.value = ''

    } else {
        alert('O nome não está completo');
    }
});

console.log(form);

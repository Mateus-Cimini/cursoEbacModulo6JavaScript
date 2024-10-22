const form = document.getElementById('formDeposito');
const nomeBeneficiario = document.getElementById('inputName');

function validaNome(nomeCompleto) {
    const nomeComoArray = nomeCompleto.split(' ').filter(nome => nome.trim().length > 0);
    return nomeComoArray.length >= 2;
}

form.addEventListener('submit', function(e) {
    let formEValido = false;
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('inputNumber');
    const valorDeposito = document.getElementById('inputValue');
    const valorFormatado = parseFloat(valorDeposito.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    const mensagemSucesso = `Montante de: <b>${valorFormatado}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`;

    formEValido = validaNome(nomeBeneficiario.value);
    if (formEValido) {
        const containerMessagemSucesso = document.querySelector('.messageSuccess');
        containerMessagemSucesso.innerHTML = mensagemSucesso;
        containerMessagemSucesso.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';

    } else {
        nomeBeneficiario.classList.add('input-error');  
        document.querySelector('.errorMessage').style.display = 'block';
    }
});

nomeBeneficiario.addEventListener('keyup', function(e) {
    formEValido = validaNome(e.target.value);

    if (!formEValido) {
        nomeBeneficiario.classList.add('input-error');  
        document.querySelector('.errorMessage').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('input-error');  
        document.querySelector('.errorMessage').style.display = 'none';
    }
});

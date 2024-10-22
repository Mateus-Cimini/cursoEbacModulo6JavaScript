
---

### **EBAC Banking - Depósito: Análise do Código**

#### **HTML:**
1. **Estrutura do Formulário**:
   - O formulário tem três campos principais: 
     - `Nome completo do beneficiário` (input de texto)
     - `Número da conta` (input numérico)
     - `Valor do depósito` (input numérico, com mínimo de R$ 0,01)
   - Há também um campo opcional de `Descrição`, representado por um `<textarea>`, e um botão `Depositar` que submete o formulário.
   - Cada campo tem um `id` que é utilizado no JavaScript para capturar e manipular os valores.

2. **Tag `<script>` com `defer`**:
   - O script JavaScript é carregado com o atributo `defer`, o que garante que ele será executado apenas após o carregamento completo do HTML. Isso é importante para que o DOM esteja totalmente pronto quando o JavaScript tentar acessar elementos da página.

---

#### **JavaScript:**

1. **Seleção do Formulário**:
   - A constante `form` captura o formulário pelo seu `id` (`formDeposito`). Isso é essencial para adicionar o manipulador de evento de submissão (`submit`).

   ```javascript
   const form = document.getElementById('formDeposito');
   ```

2. **Função `validaNome(nomeCompleto)`**:
   - Esta função valida o nome do beneficiário, verificando se há pelo menos dois nomes separados por espaços.
   - A função usa o método `split(' ')` para quebrar o nome em partes e o método `filter()` para garantir que nenhuma dessas partes seja uma string vazia (como resultado de espaços duplos ou múltiplos).
   - Retorna `true` se o nome tiver pelo menos dois componentes válidos e `false` caso contrário.

   ```javascript
   function validaNome(nomeCompleto) {
       const nomeComoArray = nomeCompleto.split(' ').filter(nome => nome.trim().length > 0);
       return nomeComoArray.length >= 2;
   }
   ```

3. **Manipulador do Evento de Submissão**:
   - Um evento de `submit` é adicionado ao formulário para ser tratado quando o usuário clicar no botão de "Depositar".
   - A função `e.preventDefault()` é chamada para impedir o comportamento padrão de recarregar a página após o envio do formulário, permitindo que o JavaScript manipule os dados antes de qualquer ação.
   
   ```javascript
   form.addEventListener('submit', function(e) {
       e.preventDefault();
   ```

4. **Captura dos Valores do Formulário**:
   - O código captura os valores dos campos `inputName`, `inputNumber` e `inputValue` usando `getElementById()`.
   - O valor de `inputValue` (valor do depósito) é formatado como moeda brasileira (R$) usando `toLocaleString()`, garantindo que seja exibido no formato correto.

   ```javascript
   const nomeBeneficiario = document.getElementById('inputName');
   const numeroContaBeneficiario = document.getElementById('inputNumber');
   const valorDeposito = document.getElementById('inputValue');
   const valorFormatado = parseFloat(valorDeposito.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
   ```

5. **Exibição da Mensagem de Sucesso**:
   - Se o nome for considerado válido pela função `validaNome()`, uma mensagem de sucesso é exibida com o valor formatado e as informações de nome e conta do beneficiário.
   - Se o nome não for válido, o usuário recebe um alerta indicando que o nome não está completo.

   ```javascript
   const mensagemSucesso = `Montante de: ${valorFormatado} depositado para o cliente: ${nomeBeneficiario.value} - conta: ${numeroContaBeneficiario.value}`;

   if (formEValido) {
       alert(mensagemSucesso);
   } else {
       alert('O nome não está completo');
   }
   ```

6. **Limpeza dos Campos**:
   - Após exibir a mensagem de sucesso, os campos do formulário são resetados para limpar os valores e deixar o formulário pronto para outra transação.

   ```javascript
   nomeBeneficiario.value = '';
   numeroContaBeneficiario.value = '';
   valorDeposito.value = '';
   ```

---

### **Resumo Final:**
- **Validação:** A função `validaNome()` garante que o beneficiário forneça pelo menos dois nomes completos.
- **Formatar Valor:** O valor do depósito é formatado como moeda brasileira (R$) para ser exibido corretamente.
- **Comportamento do Formulário:** O formulário não é enviado (com `e.preventDefault()`), permitindo que o JavaScript manipule a lógica de submissão e exibição de mensagens antes de qualquer ação.
- **Reset dos Campos:** Após a confirmação do depósito, os campos são limpos.

---


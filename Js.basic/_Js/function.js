/**Funções em JavaScript são blocos de código reutilizáveis que executam uma tarefa específica. 
 * Elas são como pequenas máquinas que você pode ligar e desligar quando precisar. Imagine uma 
 * função como uma receita: você tem os ingredientes (parâmetros) e as instruções (corpo da função) 
 * para preparar um prato (resultado). 
 * 
 * Como as funções funcionam?
Declaração: Você define uma função usando a palavra-chave function, seguida de um nome e parênteses.
 Dentro dos parênteses, você lista os parâmetros que a função pode receber.
Chamada: Para executar a função, você a chama pelo seu nome, seguido de parênteses. Se a função tiver 
parâmetros, você passa os valores desejados dentro dos parênteses.
Execução: Quando a função é chamada, o código dentro dela é executado. Os valores passados como argumentos
 são atribuídos aos parâmetros da função.
Retorno: Uma função pode retornar um valor usando a palavra-chave return. Se não houver um return, a função
 retorna undefined.*/

 function saudacao(nome) {
    console.log("Olá, " + nome + "!");
  }
  
  saudacao("Alice"); // Saída: Olá, Alice!
  
 /* Neste exemplo:

saudacao é o nome da função.
nome é o parâmetro da função.
Quando a função é chamada com o argumento "Alice", o valor "Alice" é atribuído à variável nome dentro da função.
A função então imprime a mensagem "Olá, Alice!".*/
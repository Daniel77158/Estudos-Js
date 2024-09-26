/*O loop for é uma das estruturas de controle mais utilizadas em JavaScript para executar um bloco de 
código repetidamente, enquanto uma determinada condição for verdadeira. É uma ferramenta poderosa para
 iterar sobre arrays, objetos e realizar qualquer tipo de operação repetitiva.

for (inicialização; condição; incremento) {
  // Código a ser executado repetidamente
}
  -Inicialização: Executada apenas uma vez, antes do início do loop. Geralmente, é usada para declarar
   e inicializar uma variável de controle.
-Condição: Verificada antes de cada iteração. Se a condição for verdadeira, o bloco de código é executado.
 Caso contrário, o loop termina.
-Incremento: Executado após cada iteração. Normalmente, é usado para atualizar a variável de controle.
 
const frutas = ['maçã', 'banana', 'laranja'];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
  
-Inicialização: let i = 0: Cria uma variável i e inicializa com 0 para acessar o primeiro elemento do array.
-Condição: i < frutas.length: Continua o loop enquanto i for menor que o comprimento do array.
-Incremento: i++: Incrementa i em 1 após cada iteração para acessar o próximo elemento.
*/

for(var i = 0; i < 10; i++){
    result = 1*1
    console.log('O valor atual de i é:'+ i + 'o seu quadrado é' + result);
}
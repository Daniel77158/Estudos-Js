/*O loop do...while é outra estrutura de controle em JavaScript que serve para executar um bloco de 
código pelo menos uma vez, e então repeti-lo enquanto uma determinada condição for verdadeira. 
A principal diferença entre o do...while e o while é que no do...while o bloco de código é 
executado antes de a condição ser verificada.

do {
  // Código a ser executado pelo menos uma vez
} while (condição);

Bloco de código: É executado pelo menos uma vez, antes da condição ser verificada.
Condição: É verificada após a execução do bloco de código. Se a condição for verdadeira,
 o bloco é executado novamente. Caso contrário, o loop termina.


*/

var x = 0;
var y = 0;

do {
    console.log('O valor de y é: '+ y);
    y++;
    if (y == 10) {
        x = 1;
    }
}while (x < 1);
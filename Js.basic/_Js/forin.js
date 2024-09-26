/**O laço for...in é uma estrutura de controle em JavaScript que permite iterar sobre as propriedades 
 * enumeráveis de um objeto. Isso significa que ele percorrerá todas as propriedades que podem ser
 *  acessadas diretamente pelo nome da propriedade.
 * 
 * for (variavel in objeto) {
  // código a ser executado para cada propriedade
}
 */

const minhaLista = [5,6,98,54,26,-10];


console.log('Modo antigo')
for (let index = 0; index < minhaLista.length; index++) {
    console.log('O numero atual é: ' + minhaLista[index]);
}

console.log('Modo novo')
for (const key in minhaLista) {
   console.log('O numero atual é: ' + minhaLista[key]);
    
}
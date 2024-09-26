/**O que é um array em JavaScript?

Imagine uma caixa com vários compartimentos numerados. Cada compartimento pode guardar um item diferente.
 Essa caixa é como um array em JavaScript: uma estrutura de dados que armazena uma coleção de valores,
  cada um com um índice numérico que indica sua posição.
  
  Como criar um array?

Existem duas formas principais de criar um array em JavaScript:

Literais de array:

JavaScript
*/

let frutas = ['maçã', 'banana', 'laranja'];

/**
 * Construtor Array():
 */
let numeros = new Array(5); // Cria um array com 5 elementos, inicialmente indefinidos

/**Acesso aos elementos:

Cada elemento em um array tem um índice, começando em 0. Para acessar um elemento, 
usamos o nome do array seguido do índice entre colchetes: */

console.log(frutas[0]); // Imprime: maçã

/**Modificando elementos:

Você pode alterar o valor de um elemento atribuindo um novo valor ao seu índice: */

frutas[1] = 'uva';

/*Métodos importantes de arrays:

push(): Adiciona um novo elemento ao final do array.
pop(): Remove o último elemento do array e o retorna.
shift(): Remove o primeiro elemento do array e o retorna.
unshift(): Adiciona um novo elemento ao início do array.
splice(): Remove ou adiciona elementos em uma posição específica.
slice(): Cria um novo array a partir de uma parte de um array existente.
forEach(): Executa uma função para cada elemento do array.
map(): Cria um novo array aplicando uma função a cada elemento.
filter(): Cria um novo array com os elementos que passam em um teste.
reduce(): Reduz um array a um único valor. */

/**Exemplo pratico: */

let numeros1 = [1, 2, 3, 4, 5];

// Adicionar um elemento ao final
numeros.push(6);

// Remover o primeiro elemento
numeros.shift();

// Dobrar o valor de cada elemento
let numerosDobrados = numeros.map(numero => numero * 2);

console.log(numerosDobrados); // Imprime: [4, 6, 8, 10, 12]

/**O que é um array de objetos?

Imagine que você quer armazenar informações sobre várias pessoas. Cada pessoa pode ser representada por
um objeto, contendo propriedades como nome, idade e profissão. Para organizar esses objetos de forma
eficiente, podemos colocá-los dentro de um array.

Um array de objetos é uma estrutura de dados que permite armazenar múltiplos objetos em uma única variável.
 Cada posição do array (índice) referencia um objeto específico 
 exemplo:*/

 let pessoas = [
    { nome: 'João', idade: 30, profissao: 'Programador' },
    { nome: 'Maria', idade: 25, profissao: 'Designer' },
    { nome: 'Pedro', idade: 35, profissao: 'Engenheiro' }
];
/**Para acessar um objeto específico dentro do array, utilizamos o índice: */
let primeiraPessoa = pessoas[0]; // Acessa o primeiro objeto
console.log(primeiraPessoa.nome); // Imprime: João

/**Pode mos modificar a propriedade de um objeto dentro de uma array: */
pessoas[1].idade = 26; // Altera a idade de Maria

/**Iterando sobre os elementos:

Para percorrer todos os objetos do array, podemos utilizar um loop for ou for...of: */

for (let i = 0; i < pessoas.length; i++) {
    console.log(pessoas[i].nome);
}


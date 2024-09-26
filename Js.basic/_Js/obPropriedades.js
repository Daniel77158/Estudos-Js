/**Em JavaScript, quase tudo é um objeto. Um objeto é como uma caixa que armazena diferentes tipos de 
 * dados, desde simples strings e números até funções complexas. Esses dados são organizados em 
 * propriedades.

O que são propriedades?
Chaves e valores: Cada propriedade em um objeto é composta por um nome (ou chave) e um valor.
Tipos de valores: Os valores podem ser de qualquer tipo de dado em JavaScript, incluindo strings,
 números, booleanos, outros objetos, e até mesmo funções.
Acesso: Você acessa o valor de uma propriedade usando a notação de ponto (.) ou colchetes ([]). */

let pessoa = {
    nome: "Alice",
    idade: 30,
    cidade: "São Paulo",
    interesses: ["leitura", "música", "cozinhar"],
    saudacao: function() {
      console.log("Olá, meu nome é " + this.nome);
    }
  };
  
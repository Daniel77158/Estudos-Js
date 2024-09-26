/**Em JavaScript, um objeto é como uma coleção de dados e funcionalidades relacionados.
 *  Imagine um objeto como uma caixa que contém diferentes tipos de itens: números, strings,
 *  outras caixas (objetos), e até mesmo funções. Esses itens dentro da caixa são chamados de
 *  propriedades e métodos.

Para entender melhor, vamos a um exemplo: */

const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo",
    saudar: function() {
      console.log("Olá, meu nome é " + this.nome);
    }
  };
  
/**O Operador new em JavaScript: Criando Objetos
O operador new em JavaScript é fundamental para a criação de objetos. Ele é utilizado para instanciar um objeto a partir de uma função construtora.

O que é uma função construtora?

Uma função construtora é uma função especial em JavaScript que, quando invocada com o operador new, cria um novo objeto. Esse objeto herda as propriedades e métodos definidos no protótipo da função construtora.

Como o new funciona?

Cria um novo objeto: Quando você utiliza o operador new antes de uma função construtora, um novo objeto vazio é criado.
Liga o this: O this dentro da função construtora passa a referenciar o novo objeto recém-criado.
Executa o código da função: O código dentro da função construtora é executado, e as propriedades e métodos são adicionados ao novo objeto.
Retorna o objeto: Se a função construtora não retornar explicitamente um objeto, o objeto criado no passo 1 é retornado automaticamente. */

function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  
    this.cumprimentar = function() {
      console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
    }
  }
  
  // Criando uma nova instância do objeto Pessoa
  const pessoa1 = new Pessoa("João", 30);
  
  // Acessando as propriedades e métodos
  console.log(pessoa1.nome); // Saída: João
  pessoa1.cumprimentar(); // Saída: Olá, meu nome é João e tenho 30 anos.
  
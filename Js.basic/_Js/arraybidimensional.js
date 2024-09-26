/**O que é um array bidimensional?

Imagine uma planilha: linhas e colunas organizadas para armazenar dados. Um array bidimensional em JavaScript funciona de forma similar. É um array de arrays, ou seja, cada elemento de um array principal é ele próprio um array. Isso cria uma estrutura de dados tabular, perfeita para representar dados que possuem duas dimensões, como matrizes, tabuleiros de jogos ou tabelas de dados.

Como criar um array bidimensional?

A forma mais comum de criar um array bidimensional em JavaScript é usando a notação literal de array: */

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];

  /**Neste exemplo, matriz é um array com três elementos. Cada um desses elementos é outro array com 
   * três elementos.

Acesso aos elementos:

Para acessar um elemento específico em um array bidimensional, você usa dois índices: um para a linha 
e outro para a coluna. O primeiro índice indica a linha, e o segundo indica a coluna. Por exemplo, para
 acessar o número 5 na matriz acima, você faria: */

 let valor = matriz[1][1]; // valor será 5

 /**Por que usar arrays bidimensionais?

Organização de dados: Arrays bidimensionais são ideais para organizar dados em uma estrutura tabular, 
facilitando a leitura e manipulação.
Representação de matrizes: Em matemática e ciência da computação, matrizes são representadas por arrays 
bidimensionais.
Criação de jogos: Tabuleiros de jogos, como o xadrez ou o jogo da velha, podem ser representados por arrays 
bidimensionais.
Processamento de imagens: Imagens digitais podem ser armazenadas como arrays bidimensionais, onde cada 
elemento representa um pixel. */
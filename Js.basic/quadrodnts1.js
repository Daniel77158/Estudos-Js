function getAverage(scores) {
    let sum = 0;
     for (let i = 0; i < scores.length; i++) {
       sum += scores[i];
      }
      return sum / scores.length;
   }
   
   console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
   console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

   /**1. Função getAverage(scores):
Essa linha define uma função chamada getAverage. Ela recebe um argumento chamado scores, que será um array de números representando as notas dos alunos.

2. let sum = 0;:
Dentro da função, criamos uma variável chamada sum e inicializamos ela com o valor 0. Essa variável será usada para armazenar a soma das notas.

3. for (let i = 0; i < scores.length; i++) {:
Aqui começa um loop for. Esse loop vai percorrer cada elemento do array scores.
let i = 0; inicializa um contador chamado i com o valor 0.
i < scores.length; verifica se o valor atual de i é menor que o comprimento do array scores. Se for, o loop continua.
i++ incrementa o valor de i em 1 após cada iteração.

4. sum += scores[i];:
Dentro do loop, essa linha adiciona o valor do elemento atual do array scores à variável sum.
scores[i] representa o elemento do array scores na posição i.
O operador += é uma combinação de = (atribuição) e + (adição). Ele adiciona o valor à direita ao valor à esquerda e atribui o resultado à variável à esquerda.

5. return sum / scores.length;:
Após o loop terminar, essa linha calcula a média das notas.
Divide a variável sum (que agora contém a soma de todas as notas) pelo comprimento do array scores (que é o número total de notas).
O resultado dessa divisão é a média das notas, que é então retornado pela função.

6. Chamadas da função:
As duas linhas abaixo chamam a função getAverage com dois arrays diferentes de notas.
O primeiro array contém as notas 92, 88, 12, 77, 57, 100, 67, 38, 97 e 89.
O segundo array contém as notas 45, 87, 98, 100, 86, 94, 67, 88, 94 e 95.
O resultado da média de cada array será impresso no console.
Espero que essa explicação seja clara e fácil de entender! */
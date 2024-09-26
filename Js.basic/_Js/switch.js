var pessoas = 1;

/*if (pessoas == 0){
    console.log('A sala esta vazia.');
}else if (pessoas == 1){
    console.log('Alguem tem que ser o primeiro.');
}else if (pessoas == 2){
    console.log('temos um par.');
}else if (pessoas > 2){
    console.log('Agora sim estamos começando a te r gente.');
}*/

switch (pessoas) {
    case 0:
        console.log('A sala esta vazia.');
        break;
        case 1:
        console.log('Alguem tem que ser o primeiro.');
    case 2:
        console.log('temos um par.');
        break;
        default:
            if (pessoa < 0) {
                console.log('A quantidade não pode ser negativa, verifique!')
            }else{
                console.log('Agora sim estamos começando a te r gente.');
            }
}

/**O switch é uma estrutura de controle condicional em JavaScript que nos permite executar diferentes blocos
 *  de código com base em diferentes valores de uma expressão. É uma alternativa ao if...else if...else
 *  quando temos várias condições a serem verificadas.

Como usar: */

switch (expressão) {
    case valor1:
        // Código a ser executado se a expressão for igual a valor1
        break;
    case valor2:
        // Código a ser executado se a expressão for igual a valor2
        break;
    // ... outros cases
    default:
        // Código a ser executado se nenhum dos cases corresponder
}

/**Explicando cada parte:

switch (expressão): A expressão dentro dos parênteses é avaliada e o resultado é comparado com os valores 
de cada case.
case valor1:: Cada case representa um valor possível para a expressão. Se a expressão for igual ao valor do
 case, o código dentro desse bloco é executado.
break;: A palavra-chave break é essencial para interromper a execução do switch após um case ser executado.
 Se você omitir o break, o código continuará sendo executado para os próximos cases.
default:: O default é opcional e é executado se nenhum dos cases corresponder à expressão. */

let diaDaSemana = "sábado";

switch (diaDaSemana) {
    case "segunda":
    case "terça":
    case "quarta":
    case "quinta":
    case "sexta":
        console.log("Dia de trabalho!");
        break;
    case "sábado":
    case "domingo":
        console.log("Final de semana!");
        break;
    default:
        console.log("Dia inválido.");
}
/**Quando usar o switch:

Quando você precisa verificar um valor contra vários valores possíveis.
Quando a estrutura if...else if...else se torna muito complexa ou difícil de ler.
Vantagens do switch:

Mais legível: Em alguns casos, o switch pode tornar o código mais fácil de entender, especialmente quando
 você tem muitos else if.
Mais eficiente: Em alguns motores JavaScript, o switch pode ser mais eficiente do que múltiplos if...else if.
Observações:

Os valores dos cases devem ser literais ou expressões que resultem em um valor primitivo (string, number,
 boolean).
O break é opcional, mas é altamente recomendado para evitar a execução de código indesejado em outros cases.
O default é opcional e é executado se nenhum dos cases corresponder.
Em resumo:

O switch é uma ferramenta poderosa para tomar decisões em seu código JavaScript. Ao entender como ele 
funciona, você pode escrever código mais limpo e eficiente. */

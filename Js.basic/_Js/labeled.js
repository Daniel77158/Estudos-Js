
/*Em JavaScript, um label (rótulo) é como um marcador que você coloca antes de uma declaração.
 *  Ele permite que você se refira a essa declaração em outras partes do seu código, principalmente
 *  quando usado em conjunto com as palavras-chave break e continue dentro de estruturas de controle
 *  como for e while.
 * 
 * Controlar break e continue em loops aninhados: Imagine que você tem dois loops aninhados e quer 
 * sair do loop externo quando uma determinada condição é encontrada no loop interno. Um label permite 
 * que você especifique qual loop você quer sair.
Melhorar a legibilidade do código: Labels podem tornar o código mais fácil de entender, especialmente em
 seções complexas, ao fornecer nomes significativos para diferentes partes do código.
 
 label:
 for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 2 && j === 1) {
            break label; // Sai do loop com o rótulo 'label'
        }
        console.log(i, j);
    }
}
*/
var x = 0;
label01:
for (let index = 0; index < 2; index++) {
    console.log('O valor de x é: ' + x);
    x++;

    
    label02:
    for (let index = 0; index < 2; index++) {
        console.log('O valor de x é: ' + x);
        x++;
        
        if (x < 5){
            console.log('Entrou na if');
            continue label01;
        }else {
            console.log('Entrou no else')
        }
        
    }
    
}
    










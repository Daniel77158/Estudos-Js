var operador2 = 1;

for (let operador = 1; operador <= 10; operador++) {
    console.log('Taboada de ' + operador + ':');
    operador = 1;
    do {
        console.log('* ' + operador + 'x' + operador2 + '= ' + (operador*operador2));
        operador2++;
    }while (operador2 <= 10);

    switch (operador) {
        case 2:
            console.log('Observação: Todos esses numeros são pares.');
            break;
        case 3:
            console.log('Observação: Todos esses numeros tem sama dos algarismos igual a 3, 6 ou 9.');
            break;
        case 5:
            console.log('Observação: Todos esses numeros terminam em zero ou cinco.');
            break;
        case 6:
            console.log('Observação: Todos esses numeros tem soma dos algarismos 3, 6 ou 9 e ');
            break;
        case 9:
            console.log('Observação: Todos esses numeros tem soma dos algarismos igual a 9.');
            break;
        case 10:
            console.log('Observação: Todos esses numeros terminam em zero.');
            break;
        default:
            break;
    }

    if (operador == 10 && operador2 <= 10) {
        alert('A taboada foi impressa, veja o console do DevTools.');
    } else {
        console.log('----------------------------------------------')
    }
}
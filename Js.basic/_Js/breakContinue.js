for (let index = 0; index < 10; index++) {
   console.log('---->' + index);
   if (index%2 >0 && index > 4) {
    console.log('entrou no if');
    continue;
   }
   console.log('Valor atual é: ' + index);
}
console.log('Saiu do looping');
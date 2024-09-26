const character = "!";
const count = 10;
const rows = [];
let inverted = false;

function padRow(rowNumber, rowCount) {
  return " ".repeat(rowCount - rowNumber) + character.repeat(2 * rowNumber - 1) + " ".repeat(rowCount - rowNumber);
}

/*while (rows.length < count) {
  rows.push(padRow(rows.length + 1, count));
} //Esse Loop While permite que a pirâmide fique em pé  */

/*for (let i = count; i > 0; i -= 1) {
  rows.push(padRow(i, count));
}// esse loop for, deixa o triangulo de cabeça para baixo*/

for (let i = 1; i <= count; i++) {
  if (inverted) {
    rows.unshift(padRow(i, count));
  } else {
    rows.push(padRow(i, count));
  }
}//Esse loop for inverte a piramide com apenas um sinal booleano.

let result = ""

for (const row of rows) {
  result = result + "\n" + row;
}

console.log(result);
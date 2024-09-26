/**Etapa 2
Agora o professor precisa da sua ajuda para converter a pontuação do aluno em nota alfabética.

Conclua a função getGrade que usa uma pontuação numérica como parâmetro. Sua função deve retornar uma string representando uma nota com base na pontuação.

Aqui estão as pontuações e suas notas correspondentes:

Faixa de pontuação
100'A++'
90 - 99'A'
80 - 89'B'
70 - 79'C'
60 - 69'D'
0 - 59'F'
Pontas

Lembre-se de que você aprendeu sobre declarações condicionais (if, else if e else).
Lembre-se de que você aprendeu sobre operadores de comparação ( , , =, =, ===). */
function getGrade(score) {
    if (score == 100) {
    return "A++";
    }else if ((score >= 90) && (score <= 99)) {
      return "A";
    }else if ((score >= 80) && (score <=89)) {
      return "B";
    }else if ((score >= 70) && (score <= 79)) {
      return "C";
    }else if ((score >= 60) && (score <= 69)) {
      return "D";
    }else {
      return "F"
    }
}
function hasPassingGrade(score) {
  return getGrade(score) !== "F";
}

/*function studentMsg(totalScores, studentScore) {
  if (hasPassingGrade(studentScore) == true) {
    console.log("Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You passed the course.");
  } else {
    console.log("Class average: " + getAverage(totalScores) + ". Your grade: " + getGrade(studentScore) + ". You failed the course.");
  }
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));*/
console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));
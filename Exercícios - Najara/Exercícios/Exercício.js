// 1. Crie um programa que receba um número e verifique se ele é par ou ímpar:

let numero = parseInt(prompt("Escreva um número: "));

if (numero % 2 == 0) {
    console.log("(1) O NÚMERO É PAR!")
} else {
    console.log("(1) O NÚMERO É ÍMPAR!")
}

// 2. Crie um programa que verifique se um número é positivo, negativo ou zero.
if (numero > 0) {
    console.log("(2) O NÚMERO É POSITIVO!");
} else if (numero < 0) {
    console.log("(2) O NÚMERO É NEGATIVO!");
} else {
    console.log("(2) O NÚMERO É ZERO!");
}

// 3. Crie um programa que calcule a soma de todos os números inteiros de 1 até um número N informado pelo usuário.
for (let i = 1; i < numero; i++) {
    var resultado = numero + i;
}

console.log("(3) A SOMA DOS NÚMEROS INTEIROS ATÉ O NÚMERO INFORMADO É: " + resultado);

// 4. Crie uma função que verifica se um número é primo. Um número primo é aquele que só pode ser dividido por 1 e por ele mesmo.
function verificaPrimo() {
      if (numero < 2) {
        return false;
      }
    
      for (let i = 2; i < numero; i++) {
        if (numero % i == 0) {
          return false;
        }
      }
      return true;
}

console.log("(4) O NÚMERO É PRIMO? " + verificaPrimo());

// 5. Crie um programa que conte quantas vezes uma letra aparece em uma palavra.
let palavra = prompt("Escreva uma palavra: ");
let contagem = 0;

for (let j = 0; j < palavra.length; j++) {
    if (palavra[j] == "o") {
        contagem++;
    }
}

console.log("(5) A LETRA 'O' É REPETIDA: " + contagem + " VEZES!");

// 6. Crie um programa que inverta uma string (sequência de caracteres).
let palavraInvertida = palavra.split("").reverse().join("");

console.log("(6) PALAVRA INVERTIDA: " + palavraInvertida);


// 1. Variáveis e tipos de dados: Escreva um programa que declare duas letiáveis, “nome” e “idade”, e as imprima em um console em uma frase que diga “Olá, meu nome é [nome] e eu tenho [idade] anos”.

let nome = "Gabriel";
let idade = "17";

console.log("(1) Olá, meu nome é " + nome + " e eu tenho " + idade + " anos!");

// 2. Operadores: Crie um programa que solicite ao usuário dois números e exiba o resultado da soma, subtração, multiplicação e divisão desses números.

let numero1 = parseInt(prompt("Digite um número: "));
let numero2 = parseInt(prompt("Digite outro número: "));

let adicao = numero1 + numero2;
let subtracao = numero1 - numero2;
let divisao = numero1 / numero2;
let multiplicacao = numero1 * numero2;

document.getElementById("ex2").innerHTML = `(2) ADIÇÃO: ${adicao} <br> (2) SUBTRAÇÃO: ${subtracao} <br> (2) DIVISÃO: ${divisao} <br> (2) MULTIPLICAÇÃO: ${multiplicacao} <br>`;

// 3. Condições: Escreva um programa que pergunte ao usuário sua idade e imprima se ele é maior ou menor de idade.

let promptIdade = parseInt(prompt("Digite sua idade: "));

if (promptIdade >= 18) {
    document.getElementById("ex3").innerText = "(3) VOCÊ É MAIOR DE IDADE!" 
} else {
    document.getElementById("ex3").innerText = "(3) VOCÊ É MENOR DE IDADE!" 
}

// 4. Loops: Crie um loop que imprima todos os números de 1 a 100.

for (let i = 0; i <= 100; i++) {
    document.getElementById("ex4").innerHTML += `<p> (4) ${i} </p>`;
}

// 5. Funções: Escreva uma função que aceite dois números como argumentos e retorne sua soma.

function aceitarNumero(n1, n2) {
    return n1 + n2;
}

var resultado = aceitarNumero(5, 7);
console.log("(5) A soma é: " + resultado); 

// 6. Arrays: Escreva um programa que declare um array de suas frutas favoritas e imprima cada fruta na lista usando um loop.

const array = ["banana", "uva", "abacaxi"]

for (let i = 0; i < array.length; i++) {
    document.getElementById("ex6").innerHTML += `<p> (6) ${array[i]} </p>`;
}

// 7. Objetos: Crie um objeto que represente um livro, com propriedades para título, autor e número de páginas. Imprima cada propriedade no console.

const livro = {nome:"Livro 1", autor:"Autor 1", numero:291};

console.log("(7) NOME DO LIVRO: " + livro.nome);
console.log("(7) NOME DO AUTOR: " + livro.autor);
console.log("(7) NÚMERO DE PÁGINAS: " + livro.numero);

// 8. Eventos DOM: Crie uma página HTML com um botão que, quando clicado, exiba um alerta que diga “Você clicou no botão!”.

function mostrarExercicio8() {
    alert("(8) Você clicou no botão!");
}

// 9. Manipulação de Strings: Escreva uma função que receba uma string e retorne a mesma string, mas com a primeira letra de cada palavra em maiúsculas.

function retornarString(str) {
    return str
        .split(" ")
        .map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1)) 
        .join(" ");
}

console.log(retornarString("(9) olá a todos"));

// 10. Promises e Fetch API: Use a Fetch API para fazer uma chamada para uma API pública (como a API do JSONPlaceholder) e exibir os resultados no console.

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => {
        if (!response.ok) {
            throw new Error("Erro na requisição: " + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log("(10) Lista de posts:");
        console.log(data);
    })
    .catch(error => {
        console.error("Ocorreu um erro:", error);
    });
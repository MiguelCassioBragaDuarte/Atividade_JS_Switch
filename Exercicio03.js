/*
3. Faça um programa, utilizando estrutura de condição, que receba um número real, digitado pelo usuário e mostre o menu para selecionar o tipo de cálculo que deve ser realizado:
101 - Raiz quadrada
102 - A metade
103 - 10% do número
104 - O dobro*/

const ler = require("readline-sync");

let valor = ler.questionFloat("Digite um Numero: ")

console.log("----------- TABELA DE CALCULOS ----------");
console.log("101. Raiz Quadrada");
console.log("102. A metade");
console.log("103. 10% do número");
console.log("104. O dobro");
console.log("-----------------------------------------");
let opt = ler.questionInt("=> ")
while(opt < 101 || opt >104){
    console.log("Opção Invalida, Informe uma das opções!")
    opt = ler.questionInt("=>")
}

let calc = 0;

switch (opt) {
    case 1:
        calc = Math.sqrt(valor)
        console.log(`A raiz quadrada de ${valor} é: ${calc}`);   
        break;
    case 2:
        calc = valor/2
        console.log(`A Metade de ${valor} é: ${calc}`);   
        break;
    case 3:
        calc = valor*0.1
        console.log(`10% de ${valor} é: ${calc}`);   
        break;
    case 3:
        calc = valor*2
        console.log(`O Dobro de ${valor} é: ${calc}`);   
        break;

    default:
        break;
}
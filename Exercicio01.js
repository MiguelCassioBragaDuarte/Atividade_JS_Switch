/*Faça um algoritmo que leia o peso de uma pessoa na Terra e o número de um planeta (de acordo com a tabela abaixo).
 Depois, calcule e escreva o valor do peso dessa pessoa no planeta escolhido e o nome do planeta.
 A relação de planetas e o valor das gravidades relativas à Terra são: Figura em Anexo.*/

const ler = require('readline-sync');

let peso = ler.questionFloat("Informe o peso da pessoa no Planeta Terra: ");

console.log("----------- TABELA DE PLANETAS ----------");
console.log("1. Mercúrio")
console.log("2. Vênus")
console.log("3. Marte")
console.log("4. Júpiter")
console.log("5. Saturno")
console.log("6. Urano")
console.log("-----------------------------------------");
let opt = ler.questionInt("=> ")
while(opt < 1 || opt >6){
    console.log("Opção Invalida, Informe uma das opções!")
    opt = ler.questionInt("=>")
}

let calc = 0;

switch (opt) {
    case 1:
        calc = (peso/10)*0.37
        console.log("Peso Em Mercúrio: "+calc)
        break;
    case 2:
        calc = (peso/10)*0.88
        console.log("Peso Em Vênus: "+calc)
        break;
    case 3:
        calc = (peso/10)*0.38
        console.log("Peso Em Marte: "+calc)
        break;
    case 4:
        calc = (peso/10)*2.64
        console.log("Peso Em Júpiter: "+calc)
        break;
    case 5:
        calc = (peso/10)*1.15
        console.log("Peso Em Saturno: "+calc)
        break;
    case 6:
        calc = (peso/10)*1.17
        console.log("Peso Em Urano: "+calc)
        break;

    default:
        break;
}
/*2. Uma loja fornece 10% de desconto para funcionários e 5% de desconto para clientes vips. 
Faça um programa que calcule o valor total a ser pago por uma pessoa. O programa deverá ler o valor 
total da compra efetuada e um código que identifique se o comprador é um 
cliente comum (1), funcionário (2) ou vip (3).*/

const ler = require("readline-sync");

let valor = ler.questionFloat("Digite o Valor da compra: ")

console.log("----------- TABELA DE CLIENTES ----------");
console.log("1. Comum")
console.log("2. Funcionario")
console.log("3. Vip")
console.log("-----------------------------------------");
let opt = ler.questionInt("=> ")
while(opt < 1 || opt >3){
    console.log("Opção Invalida, Informe uma das opções!")
    opt = ler.questionInt("=>")
}

let calc = 0;

switch (opt) {
    case 1:
        console.log("Valor a ser pago é (Comum): R$ "+valor);
        break;
    case 2:
        calc = valor - (valor*0.10);
        console.log("Valor a ser pago é (Funcionario): R$ "+calc);
        break;
    case 3:
        calc = valor - (valor*0.05);
        console.log("Valor a ser pago é (Vip): R$ "+calc);
        break;
    

    default:
        break;
}

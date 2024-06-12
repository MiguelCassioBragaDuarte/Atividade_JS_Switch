const ler = require("readline-sync");

let valor = ler.questionFloat("Digite o Valor da venda: ");

console.log("----------- TABELA DE CONDIÇÕES ----------");
console.log("1. A vista");
console.log("2. A prazo 30 dias");
console.log("3. A prazo 60 dias");
console.log("4. A prazo 90 dias");
console.log("5. Debito");
console.log("-----------------------------------------");
let opt = ler.questionInt("=> ");
while(opt < 1 || opt >5){
    console.log("Opção Invalida, Informe uma das opções!")
    opt = ler.questionInt("=>")
}

let calc = 0;

switch (opt) {
    case 1:
        calc = valor - (valor*0.1);
        console.log("Valor a ser pago com 10% de desconto: R$"+calc);
        break;
    case 2:
        calc = valor - (valor*0.05);
        console.log("Valor a ser pago com 5% de desconto: R$"+calc);
        break;
    case 3:
        console.log("Valor a ser pago: R$"+valor);
        break;
    case 4:
        calc = valor + (valor*0.05);
        console.log("Valor a ser pago com 5% de Acrescimo: R$"+calc);
        break;
    case 5:
        calc = valor - (valor*0.08);
        console.log("Valor a ser pago com 8% de desconto: R$"+calc);
        break;


    default:
        break;
}
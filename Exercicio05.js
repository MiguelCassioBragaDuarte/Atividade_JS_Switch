const ler = require("readline-sync");

console.log("----------- TABELA DE MÊS ----------");
console.log("1. Janeiro");
console.log("2. Feverreiro");
console.log("3. Março");
console.log("4. Abril");
console.log("5. Maio");
console.log("6. Junho");
console.log("7. Julho");
console.log("8. Agosto");
console.log("9. Setembro");
console.log("10. Outubro");
console.log("11. Novembro");
console.log("12. Dezembro");
console.log("-----------------------------------------");
console.log("Escolha um mês: ");
let opt = ler.questionInt("=> ")
while(opt < 1 || opt >12){
    console.log("Opção Invalida, Informe uma das opções!")
    opt = ler.questionInt("=>")
}

switch (opt) {
    case 1:
        console.log("Janeiro - Verão")
        break;
    case 2:
        console.log("Fevereiro - Verão")
        break;
    case 3:
        console.log("Março - Verão")
        break;
    case 4:
        console.log("Abril - Outono")
        break;
    case 5:
        console.log("Maio - Outono")
        break;
    case 6:
        console.log("Junho - Outono")
        break;
    case 7:
        console.log("Julho - Inverno")
        break;
    case 8:
        console.log("Agosto - Inverno")
        break;
    case 9:
        console.log("Setembro - Inverno")
        break;
    case 10:
        console.log("Outubro - Primaveira")
        break;
    case 11:
        console.log("Novembro - Primaveira")
        break;
    case 12:
        console.log("Dezembro - Primaveira")
        break;

    default:
        break;
}
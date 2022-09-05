//let valor = 5
/*
switch(valor){ //permite criar condições, deve-se passar algo para que seja verificado
	case 0:
		console.log("O valor é",valor);
		break; //pare
		default: consle.log(teste)	//else
}
do{ //faça - garante que o cod rode pelo menos uma vez
	
}

while{ //enquanto
	
}
let media; nota1 = 9; nota2 = 5;

media = (nota1 + nota2) / 2;

switch(media >= 6){
	
	case true:
		console.log("aprovado");
		break;
	
	default:
		console.log("reprovado");
		break;
}

do{
	console.log("O indice é menor que 15", indice);
	indice++
}while(indice < 15);
*/

function adicionarPrato(){
	
	let pedido = document.getElementById("numero-prato");
	let total = document.getElementById("total");
	let saldoAnterior = 0;
	
	switch(pedido.value){
		
		case "1":
			saldoAnterior = total.innerText;				   // string
			total.innerHTML = parseFloat(saldoAnterior) + 10; // parseFloat - string --> inteiro
			break;
		case "2":
			total.innerHTML = "R$ 10,00";
			break;
		case "3":
			total.innerHTML = "R$ 8,00";
			break;
		case "4":
			total.innerHTML = "R$ 15,00";
			break;
		default:
			alert("O valor digitado não corresponde a um prato");
			break;
	}
	
	console.log(pedido.value) //.value - recuperar o valor do item
}
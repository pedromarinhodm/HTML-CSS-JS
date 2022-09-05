/*     
<
>
>=
<=
==
=== igual(valor e tipo)
!=	diferente
!== diferente(valor e tipo)
&&	e
||	ou
!	negação (!(   )){
*/

function modoNoturno(){
	
	let textoH1 = document.getElementById("titulo"); //buscar elemento pelo id no HTML
	let botao = document.getElementById("botao");
	
	if(textoH1.innerText == "Modo Diurno"){
		
		document.body.style.backgroundColor = "black";

		//
		textoH1.innerHTML = "MODO NOTURNO"; //.innerHTML - permite inserir/alterar html pelo js
		textoH1.style.color = "white";
	
		//	
		botao.style.backgroundColor = "white";
		botao.style.color = "black";
		botao.innerHTML = "Ativar modo diurno"
	
	}else{
	
		document.body.style.backgroundColor = "white";	
		
		textoH1.innerHTML = "Modo Diurno"; //.innerHTML - permite inserir/alterar html pelo js
		textoH1.style.color = "black";
	
		//	
		botao.style.backgroundColor = "black";
		botao.style.color = "white";
		botao.innerHTML = "Ativar modo noturno"
	
	}
	
	
	
}
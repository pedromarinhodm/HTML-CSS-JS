function validarInput(){
	let nome = document.getElementById("nome-user").value;
	let email = document.getElementById("email").value;
	
	if (!(nome.lenght > 5) || nome.includes(" ")){		
		alert("Verifique o campo indicado");
		document.getElementyId("nome-user").style.borderColor = "red";
	}else if(!(email.lenght >= 10) || !email.includes("@") || !email.includes(".com")){
		alert("Verifique o email informado");
		document.getElementById("email").style.borderColor = "red";
	}
	else{
		document.getElementById("nome-user").style.borderColor = "green";
		document.getElementById("email").style.borderColor = "green";
	}
	
}
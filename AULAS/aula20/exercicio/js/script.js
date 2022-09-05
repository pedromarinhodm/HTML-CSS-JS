function validarInput(){
	let nome = document.getElementById("username").value;
	let idade = document.getElementById("idade").value;
	let email = document.getElementById("email").value;
	let cep = document.getElementById("cep").value;
	
	if (!(nome.lenght > 5) || nome.includes(" ")){		
		alert("Verifique o campo indicado");
		document.getElementyId("username").style.borderColor = "red";
	}else if(idade < "18")){
		alert("Verifique o campo indicado");
		document.getElementById("idade").style.borderColor = "red";
	}else if(!(email.lenght >= 10) || !email.includes("@") || !email.includes(".com")){
		alert("Verifique o campo indicado");
		document.getElementById("email").style.borderColor = "red";
	}else if(cep.lenght < 8){
		alert("Verifique o campo indicado");
		document.getElementById("cep").style.borderColor = "red";
	}
	else{
		document.getElementById("username").style.borderColor = "green";
		document.getElementById("idade").style.borderColor = "green";
		document.getElementById("email").style.borderColor = "green";
		document.getElementById("cep").style.borderColor = "green";
	}
	
}
let validador = localStorage.getItem('Access');
let datePick = document.getElementById('inputDate').value;
if (validador == 'true') {
	window.alert('Entrando al sitio');
	window.location.href = "./Productos.html";
	//window.alert('Entrando al sitio');
}


document.getElementById('submitButton').addEventListener('click', () => {
    
	let datePick = document.getElementById('inputDate').value;
	let date = new Date(Date.parse(datePick));
	let now = new Date();
	let edad = now.getFullYear() - date.getFullYear();

	let name = document.getElementById('inputName').value;
	let checkBox = document.getElementById('gridCheck').checked;
	console.log(checkBox);
	console.log(typeof (checkBox));




	if (name.length < 5) alert('Favor de ingresar un nombre valido');
	else if (edad < 18) alert('Lo sentimos no eres mayor de edad');
	else if (checkBox == false) alert('Favor de aceptar decir la verdad');
	else {
		localStorage.setItem('Access', 'true');
		//alert('Ingresando al sistema');
		window.location.href = "./Productos.html";
	}


});
let password = document.getElementById('inputPass');
let numCaracteresText = document.getElementById('6caracteres');
let mayusculaText = document.getElementById('mayuscula');
let minusculaText = document.getElementById('minuscula');
let numeroText = document.getElementById('numero');
let carEspecialText = document.getElementById('carEspecial');
console.log(password.value);

document.getElementById("inputPass").addEventListener('input',function(){

    console.log(password.value);
let checkNumeroCaracteres=/.{6}/.test(password.value);
let checkMayuscula=/[A-Z]{1}/.test(password.value);
let checkMiniscula=/[a-z]{1}/.test(password.value);
let checkNumero=/[0-9]{1}/.test(password.value);
let regexpEspecial=/[?¿!¡@$%]/g;
let checkEspecial=regexpEspecial.test(password.value);



if(checkNumeroCaracteres=== true) numCaracteresText.style.color="green";
else numCaracteresText.style.color="red";
if(checkMayuscula===true)mayusculaText.style.color="green";
else mayusculaText.style.color="red";
if(checkMiniscula===true)minusculaText.style.color="green";
else minusculaText.style.color="red";
if(checkNumero===true)numeroText.style.color="green";
else numeroText.style.color="red";
if(checkEspecial===true)carEspecialText.style.color="green";
else carEspecialText.style.color="red";
//console.log(checkEspecial);

});



const array1=[1,2,3,4,5,10,15,40];


let doubleValues= array1.map(function (x){
    return x*2;
});

let divToFive= array1.filter(value=> value%5==0);

let firstDivToFive= array1.find(value=>value%5==0);

console.log('El doble de cada elemento del arreglo es: '+doubleValues);
console.log('Los elementos del arreglo divisibles entre 5 son: '+divToFive);
console.log('El primer elemento del arreglo divisible entre 5 es: '+firstDivToFive);
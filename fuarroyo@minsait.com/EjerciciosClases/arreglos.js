let equalArray=(arreglo1,arreglo2)=>{
    if(arreglo1.length!=arreglo2.length)
    return false;
    else{
    for(let i=0;i<arreglo1.length;i++){
        if(arreglo1[i]!=arreglo2[i])
        return false
    }
}
    return true;
}


let arr1=[1,2,3,4,5,6,'hola'];
let arr2=[1,2,3,4,5,6,'hola'];

console.log(equalArray(arr1,arr2));
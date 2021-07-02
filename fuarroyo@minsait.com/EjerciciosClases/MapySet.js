
let ejemploMapa= new Map();
ejemploMapa.set('a',1);
ejemploMapa.set('b',2);
ejemploMapa.set('c',3);
ejemploMapa.set('d',1);
ejemploMapa.set('e',2);
ejemploMapa.set('f',3);


let promedio=(mapa)=>{
    let suma=0;
    for(var val of mapa.values()) {
        suma=suma+val;
    }
    return suma/mapa.size;
}


let moda=(mapa)=>{
    let maximoNumRepeticiones= 0;
    let moda= 0;

    for(let i=0; i<mapa.size; i++)
    {
        let numRepeticiones= 0;
        for(let j=0; j<mapa.size; j++)
        {
            if(mapa.get(i)==mapa.get(j))
            {
                numRepeticiones++;
            }   
            if(numRepeticiones>maximoNumRepeticiones)
            {
                moda= mapa.get(i);
                maximoNumRepeticiones= numRepeticiones;
            }   
        }
    }   
    console.log(moda);
}

console.log(promedio(ejemploMapa));
moda(ejemploMapa);
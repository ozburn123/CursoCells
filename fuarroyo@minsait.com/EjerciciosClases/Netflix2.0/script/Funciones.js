
const buscadorPeliculas = (nombrePelicula,arregloPeliculas) =>{
    /*  
        Funcion: buscadorPeliculas
        Input:  arreglo
        Output: SI encuentra el titulo, refresa la Clase encontrada, 
        SINO regresa un string 'No tenemos _______ en el catalogo'  
    */
    let busqueda = arregloPeliculas.find( (x) => x.titulo === nombrePelicula );
    if(typeof(busqueda) == 'undefined')
        return `No tenemos "${nombrePelicula}" en el catalogo`;
    return busqueda;
}

const buscadorPeliculasAll= (nombrePelicula,arregloPeliculas)=>{
//if(nombrePelicula==""|| nombrePelicula.length==0)
//return `Lo sentimos tu busqueda "${nombrePelicula.toLowerCase()}", no generó resultados`;
let peliculas=arregloPeliculas.filter(title=>title.titulo.toLowerCase().includes(nombrePelicula.toLowerCase()));
//console.log("TAMAÑO= "+peliculas.length);
//console.log(peliculas);
if(peliculas.length==0) return `Lo sentimos tu busqueda "${nombrePelicula.toLowerCase()}", no generó resultados`;
return peliculas;
}

const buscadorPeliculasAnios=(inicio,fin,arregloPeliculas)=>{
    let busquedaAnio=arregloPeliculas.filter((x)=>x.year>=inicio&&x.year<=fin);
    return busquedaAnio;
}

const armarLayout = (id,arregloPeliculas) =>{
    document.getElementById(id).innerHTML = '';
    arregloPeliculas.forEach((peli)=> document.getElementById(id).innerHTML += `<div class="peliculaContainer" style="background-image:url('${peli.imgURL}')"><p>${peli.titulo}</p></div>` );
}



export {buscadorPeliculas,buscadorPeliculasAnios,armarLayout,buscadorPeliculasAll};
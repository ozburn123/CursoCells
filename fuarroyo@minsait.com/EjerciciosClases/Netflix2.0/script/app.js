import Pelicula from './Pelicula.js';
import {buscadorPeliculas,buscadorPeliculasAnios,armarLayout,buscadorPeliculasAll} from './Funciones.js';


let arregloPeliculas = [];
arregloPeliculas.push(new Pelicula('El exorcista', 'https://i.blogs.es/897fb0/650_1000_the-exorcist-00/1366_2000.jpg', 1973));
arregloPeliculas.push(new Pelicula('Volver al futuro', 'https://cdn.forbes.com.mx/2015/10/back_to_the_future-640x400.jpg', 1985));
arregloPeliculas.push(new Pelicula('Interestelar', 'https://m.media-amazon.com/images/I/71GUcOcYIuL._AC_SY741_.jpg', 2014));
arregloPeliculas.push(new Pelicula('Pasajeros', 'https://i.ytimg.com/vi/odg9laqq_4k/maxresdefault.jpg', 2016));
arregloPeliculas.push(new Pelicula('Halloween', 'https://m.media-amazon.com/images/I/71uLZrLxQIL._CR204,0,1224,1224_UX256.jpg', 1978));
arregloPeliculas.push(new Pelicula('El señor de los Anillos', 'https://static.wikia.nocookie.net/eldragonverde/images/b/b2/Cinemania_lordoftherings.jpg/revision/latest?cb=20130103162924&path-prefix=es', 2003));
arregloPeliculas.push(new Pelicula('El Planeta del Tesoro', 'https://pics.filmaffinity.com/treasure_planet-317268663-large.jpg', 2002));
arregloPeliculas.push(new Pelicula('Harry Potter', 'http://www.mposter.com/wp-content/uploads/2010/01/harry-potter-2.jpg', 2001));
arregloPeliculas.push(new Pelicula('Atlantis 2001', 'https://1.bp.blogspot.com/-JhmScEoU9as/Xr74F_YxL4I/AAAAAAAAUEE/YDChr3urO5YYw2ytEZmeCeZdLC9NPmZWwCLcBGAsYHQ/s1600/F1C25C2F8C9181C797B41CF3DC3CE3FAFBD69C8C4493756FF2839521BC66B86D.png', 2001));


const formulario = document.getElementById('buscadorPeliculas');
const formularioAnioInicial = document.getElementById('buscadorInicio');
const formularioAnioFinal = document.getElementById('buscadorFin');

formulario.elements['titulo'].addEventListener('change', function () {
    if (this.value === '') armarLayout('contenedor',arregloPeliculas);
})

formularioAnioFinal.addEventListener('submit',(event)=>{
    event.preventDefault();
    let fechaInicio = formularioAnioInicial.elements['anioInicio'].value;
    let fechaFin = formularioAnioFinal.elements['anioFin'].value;
    let respuestaAnio = buscadorPeliculasAnios(fechaInicio, fechaFin,arregloPeliculas);
    if(respuestaAnio!='')
    armarLayout('contenedor',respuestaAnio);
    else  document.getElementById('contenedor').innerHTML = respuestaAnio;
    console.log(typeof(respuestaAnio));
})

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    let tituloBusqueda = formulario.elements['titulo'].value;
    let fechaInicio = formularioAnioInicial.elements['anioInicio'].value;
    let fechaFin = formularioAnioFinal.elements['anioFin'].value;
    console.log(tituloBusqueda);
    let respuesta = buscadorPeliculas(tituloBusqueda,arregloPeliculas);
    let respuestaAnio = buscadorPeliculasAnios(fechaInicio, fechaFin,arregloPeliculas);
    let respuestaTitle=buscadorPeliculasAll(tituloBusqueda,arregloPeliculas);
    console.log(respuesta);
    console.log(respuestaAnio);
    console.log(respuestaTitle);
    //if (typeof (respuesta) === 'string') {
        if(tituloBusqueda!=''){
        //document.getElementById('contenedor').innerHTML = '';
        //respuestaAnio.forEach((peli) => document.getElementById('contenedor').innerHTML += `<div class="peliculaContainer" style="background-image:url('${peli.imgURL}')"><p>${peli.titulo}</p></div>`);
        armarLayout('contenedor',respuestaTitle);
        // document.getElementById('contenedor').innerHTML = respuesta;
    } else {
        //document.getElementById('contenedor').innerHTML = `<div class="peliculaContainer" style="background-image:url('${respuesta.imgURL}')"><p>${respuesta.titulo}</p></div>`;
        document.getElementById('contenedor').innerHTML = respuestaTitle;
       // armarLayout('contenedor',respuestaTitle);
       // armarLayout('contenedor',arregloPeliculas);
    }
});

armarLayout('contenedor',arregloPeliculas);
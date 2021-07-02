
class Pelicula{
    constructor(titulo,imgURL,year){
        this.titulo = titulo;
        this.imgURL = imgURL;
        this.year = (typeof(year) == 'number') ? year : parseInt(year);
    }

    get fullName() {
        return `${this.titulo}`;
    }

    get img() {
        return `${this.imgURL}`;
    }
}

export default Pelicula;
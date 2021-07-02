
import dataStores from './Stores.js';

import dataProducts from './Products.js';


let descriptionProducts = dataProducts.map(({ DESCRIPTION }) => DESCRIPTION);
let imgProducts = dataProducts.map(({ IMG }) => IMG);


document.getElementById('InfoComestible').addEventListener('click', () => {
    document.getElementById('contenedorInfo').innerHTML = '';
    document.getElementById('contenedorInfo').innerHTML += `<div class="row justify-content-around" style="padding: 3%;"> 
    <div class="col-md-7">
    <h2>COMESTIBLES</h2>
    <p>${descriptionProducts[0]}</p>
</div>
<div class="col-md-4 text-center">
    <img src="${imgProducts[0]}">
</div>
</div>`;
});

document.getElementById('InfoConcentrados').addEventListener('click', () => {
    document.getElementById('contenedorInfo').innerHTML = '';
    document.getElementById('contenedorInfo').innerHTML += `<div class="row justify-content-around" style="padding: 3%;"> 
    <div class="col-md-7">
    <h2>CONCENTRADOS</h2>
    <p>${descriptionProducts[1]}</p>
</div>
<div class="col-md-4 text-center">
    <img src="${imgProducts[1]}">
</div>
</div>`;
});

document.getElementById('InfoTinturas').addEventListener('click', () => {
    document.getElementById('contenedorInfo').innerHTML = '';
    document.getElementById('contenedorInfo').innerHTML += `<div class="row justify-content-around" style="padding: 3%;"> 
    <div class="col-md-7">
    <h2>TINTURAS</h2>
    <p>${descriptionProducts[2]}</p>
</div>
<div class="col-md-4 text-center">
    <img src="${imgProducts[2]}">
</div>
</div>`;
});

document.getElementById('InfoVaporizadores').addEventListener('click', () => {
    document.getElementById('contenedorInfo').innerHTML = '';
    document.getElementById('contenedorInfo').innerHTML += `<div class="row justify-content-around" style="padding: 3%;"> 
    <div class="col-md-7">
    <h2>VAPORIZADORES</h2>
    <p>${descriptionProducts[3]}</p>
</div>
<div class="col-md-4 text-center">
    <img src="${imgProducts[3]}">
</div>
</div>`;
});

document.getElementById('InfoCBD').addEventListener('click', () => {
    document.getElementById('contenedorInfo').innerHTML = '';
    document.getElementById('contenedorInfo').innerHTML += `<div class="row justify-content-around" style="padding: 3%;"> 
    <div class="col-md-7">
    <h2>CBD</h2>
    <p>${descriptionProducts[4]}</p>
</div>
<div class="col-md-4 text-center">
    <img src="${imgProducts[4]}">
</div>
</div>`;
});

document.getElementById('InfoCigarros').addEventListener('click', () => {
    document.getElementById('contenedorInfo').innerHTML = '';
    document.getElementById('contenedorInfo').innerHTML += `<div class="row justify-content-around" style="padding: 3%;"> 
    <div class="col-md-7">
    <h2>CIGARROS</h2>
    <p>${descriptionProducts[5]}</p>
</div>
<div class="col-md-4 text-center" >
    <img src="${imgProducts[5]}">
</div>
</div>`;
});

document.getElementById('AdquirirComestibles').addEventListener('click', () => {
    let auxStores = [];
    for (let i = 0; i < dataStores.length; i++) {
        if (dataStores[i].COMESTIBLE === 'true')
            auxStores.push(dataStores[i]);
    }
    console.log(auxStores);
    document.getElementById('contenedorStores').innerHTML = '<h2>Tiendas disponibles para: Comestibles</h2>';
    for (let i = 0; i < auxStores.length; i++) {
        document.getElementById('contenedorStores').innerHTML += `
        <div class="col" style="padding: 1%;">
        <a  class="clickable btn btn-outline-secondary btn-lg btn-block" >
            <p id="${auxStores[i].ID}" style="font-size: 70%;">
            <b> ${auxStores[i].NAME} </b>
            ${auxStores[i].ADRESS}
            </p>
        </a>
    </div>`;
    }

    document.querySelectorAll(".clickable").forEach(el => {
        el.addEventListener("click", e => {
            let id = e.target.getAttribute("id");
            let idNumber = Number(id);
            console.log(idNumber);
            let latitud = Number(dataStores[idNumber].LATITUD);
            let longitud = Number(dataStores[idNumber].LONGITUD);
            console.log(latitud);
            console.log(longitud);

            searchLocationMap(latitud, longitud, 15, dataStores[idNumber].NAME);

        });
    });

});

document.getElementById('AdquirirConcentrados').addEventListener('click', () => {
    let auxStores = [];
    for (let i = 0; i < dataStores.length; i++) {
        if (dataStores[i].CONCENTRADO === 'true')
            auxStores.push(dataStores[i]);
    }
    console.log(auxStores);
    document.getElementById('contenedorStores').innerHTML = '<h2>Tiendas disponibles para: Concentrados</h2>';
    for (let i = 0; i < auxStores.length; i++) {
        document.getElementById('contenedorStores').innerHTML += `
        <div class="col" style="padding: 1%;">
        <a  class="clickable btn btn-outline-secondary btn-lg btn-block" >
            <p id="${auxStores[i].ID}" style="font-size: 70%;">
            <b>${auxStores[i].NAME} </b>
            ${auxStores[i].ADRESS}
            </p>
        </a>
    </div>`;
    }

    document.querySelectorAll(".clickable").forEach(el => {
        el.addEventListener("click", e => {
            let id = e.target.getAttribute("id");
            let idNumber = Number(id);
            console.log(idNumber);
            let latitud = Number(dataStores[idNumber].LATITUD);
            let longitud = Number(dataStores[idNumber].LONGITUD);
            console.log(latitud);
            console.log(longitud);

            searchLocationMap(latitud, longitud, 15, dataStores[idNumber].NAME);

        });
    });
});

document.getElementById('AdquirirTinturas').addEventListener('click', () => {
    let auxStores = [];
    for (let i = 0; i < dataStores.length; i++) {
        if (dataStores[i].TINTURA === 'true')
            auxStores.push(dataStores[i]);
    }
    console.log(auxStores);
    document.getElementById('contenedorStores').innerHTML = '<h2>Tiendas disponibles para: Tinturas</h2>';
    for (let i = 0; i < auxStores.length; i++) {
        document.getElementById('contenedorStores').innerHTML += `
        
        <div class="col" style="padding: 1%;">
        <a  class="clickable btn btn-outline-secondary btn-lg btn-block" >
            <p id="${auxStores[i].ID}" style="font-size: 70%;">
            <b> ${auxStores[i].NAME} </b>
            ${auxStores[i].ADRESS}
            </p>
        </a>
    </div>`;
    }

    document.querySelectorAll(".clickable").forEach(el => {
        el.addEventListener("click", e => {
            let id = e.target.getAttribute("id");
            let idNumber = Number(id);
            console.log(idNumber);
            let latitud = Number(dataStores[idNumber].LATITUD);
            let longitud = Number(dataStores[idNumber].LONGITUD);
            console.log(latitud);
            console.log(longitud);

            searchLocationMap(latitud, longitud, 15, dataStores[idNumber].NAME);

        });
    });
});

document.getElementById('AdquirirVaporizadores').addEventListener('click', () => {
    let auxStores = [];
    for (let i = 0; i < dataStores.length; i++) {
        if (dataStores[i].VAPORIZADOR === 'true')
            auxStores.push(dataStores[i]);
    }
    console.log(auxStores);
    document.getElementById('contenedorStores').innerHTML = '<h2>Tiendas disponibles para: Vaporizadores</h2>';
    for (let i = 0; i < auxStores.length; i++) {
        document.getElementById('contenedorStores').innerHTML += `
        <div class="col" style="padding: 1%;">
        <a  class="clickable btn btn-outline-secondary btn-lg btn-block" >
            <p id="${auxStores[i].ID}" style="font-size: 70%;">
            <b> ${auxStores[i].NAME} </b>
            ${auxStores[i].ADRESS}
            </p>
        </a>
    </div>`;
    }

    document.querySelectorAll(".clickable").forEach(el => {
        el.addEventListener("click", e => {
            let id = e.target.getAttribute("id");
            let idNumber = Number(id);
            console.log(idNumber);
            let latitud = Number(dataStores[idNumber].LATITUD);
            let longitud = Number(dataStores[idNumber].LONGITUD);
            console.log(latitud);
            console.log(longitud);
            searchLocationMap(latitud, longitud, 15, dataStores[idNumber].NAME);

        });
    });

});

document.getElementById('AdquirirCBD').addEventListener('click', () => {
    let auxStores = [];
    for (let i = 0; i < dataStores.length; i++) {
        if (dataStores[i].CBD === 'true')
            auxStores.push(dataStores[i]);
    }
    console.log(auxStores);
    document.getElementById('contenedorStores').innerHTML = '<h2>Tiendas disponibles para: CBD</h2>';
    for (let i = 0; i < auxStores.length; i++) {
        document.getElementById('contenedorStores').innerHTML += `
        <div class="col" style="padding: 1%;">
        <a  class="clickable btn btn-outline-secondary btn-lg btn-block" >
            <p id="${auxStores[i].ID}" style="font-size: 70%;">
            <b>${auxStores[i].NAME} </b>
            ${auxStores[i].ADRESS}
            </p>
        </a>
    </div>`;
    }

    document.querySelectorAll(".clickable").forEach(el => {
        el.addEventListener("click", e => {
            let id = e.target.getAttribute("id");
            let idNumber = Number(id);
            console.log(idNumber);
            let latitud = Number(dataStores[idNumber].LATITUD);
            let longitud = Number(dataStores[idNumber].LONGITUD);
            console.log(latitud);
            console.log(longitud);

            searchLocationMap(latitud, longitud, 15, dataStores[idNumber].NAME);

        });
    });

});


document.getElementById('AdquirirCigarros').addEventListener('click', () => {
    let auxStores = [];
    for (let i = 0; i < dataStores.length; i++) {
        if (dataStores[i].CIGARRO === 'true')
            auxStores.push(dataStores[i]);
    }
    console.log(auxStores);
    document.getElementById('contenedorStores').innerHTML = '<h2>Tiendas disponibles para: Cigarros</h2>';
    for (let i = 0; i < auxStores.length; i++) {
        document.getElementById('contenedorStores').innerHTML += `
        <div class="col" style="padding: 1%;">
        <a  class="clickable btn btn-outline-secondary btn-lg btn-block" >
            <p id="${auxStores[i].ID}" style="font-size: 70%;">
            <b>${auxStores[i].NAME}</b>
            ${auxStores[i].ADRESS}
            </p>
        </a>
    </div>`;

    }

    document.querySelectorAll(".clickable").forEach(el => {
        el.addEventListener("click", e => {
            let id = e.target.getAttribute("id");
            let idNumber = Number(id);
            console.log(idNumber);
            let latitud = Number(dataStores[idNumber].LATITUD);
            let longitud = Number(dataStores[idNumber].LONGITUD);
            console.log(latitud);
            console.log(longitud);
            searchLocationMap(latitud, longitud, 15, dataStores[idNumber].NAME);

        });
    });
});






////INICIALIZA MAPA Y LISTA DE TIENDAS
const tilesProvider = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tilesProvider2 = 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}';

let myMap = L.map('mapid').setView([19.4978, -99.1269], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 20,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoib3pidXJuMTIzIiwiYSI6ImNrcHlqcHV4NjA3Z2IycW1icGtqdHRjMWoifQ.pqpXaCphMSLVNUmPWlY3nQ'
}).addTo(myMap);

let marker = L.marker([19.4978, -99.1269]).addTo(myMap);
marker.bindPopup("<b>Selecciona una tienda</b><br>Hola!!").openPopup();


document.getElementById('contenedorStores').innerHTML = '<h2>Tiendas disponibles</h2>';
for (let i = 0; i < dataStores.length; i++) {
    document.getElementById('contenedorStores').innerHTML += `
    
    <div class="col" style="padding: 1%;">
    <a  class="clickable btn btn-outline-secondary btn-lg btn-block" >
        <p id="${dataStores[i].ID}" style="font-size: 70%;">
        <b>${dataStores[i].NAME} </b>
        ${dataStores[i].ADRESS}
        </p>
    </a>
</div>`};

document.querySelectorAll(".clickable").forEach(el => {
    el.addEventListener("click", e => {
        let id = e.target.getAttribute("id");
        let idNumber = Number(id);
        console.log(idNumber);
        let latitud = Number(dataStores[idNumber].LATITUD);
        let longitud = Number(dataStores[idNumber].LONGITUD);
        console.log(latitud);
        console.log(longitud);
        searchLocationMap(latitud, longitud, 15, dataStores[idNumber].NAME);

    });
});


///FUNCION UBICAR EN MAPA
const searchLocationMap = (latitude, longitude, zoom, store) => {
    let container = L.DomUtil.get("mapid");
    let myMap = null;
    if (container != null) {
        container._leaflet_id = null;
    }

    myMap = L.map('mapid').setView([latitude, longitude], zoom);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        maxZoom: 20,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1Ijoib3pidXJuMTIzIiwiYSI6ImNrcHlqcHV4NjA3Z2IycW1icGtqdHRjMWoifQ.pqpXaCphMSLVNUmPWlY3nQ'
    }).addTo(myMap);
    let marker = L.marker([latitude, longitude]).addTo(myMap);
    marker.bindPopup(`<b> ${store}</b><br>¡¡Visitanos!!`).openPopup();

};
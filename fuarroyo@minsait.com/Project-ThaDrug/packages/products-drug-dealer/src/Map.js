import { html, css, LitElement } from 'lit-element';

export class Map extends LitElement {
    static get styles() {
        return css`
        .container{
            display: flex;
            flex-direction:row;
            font-family:"Montserrat", Sans-serif;
        }
        button{
            width:100%;
            padding:20px;
        }
        #mapid {
            height: 590px; 
           }
    `;
    }

    static get properties() {
        return {
            stores: { type: Array },
            latitude:{type:Number},
            longitude:{type:Number}
        };
    }

    constructor() {
        super();
        this.latitude=19.4978;
        this.longitude=-99.1269;
    }
    
    firstUpdated(){
        let myMap = L.map('mapid').setView([19.4978, -99.1269], 12);
        //let myMap = L.DomUtil.get(this.shadowRoot.getElementById("mapid")).setView([19.4978, -99.1269], 12);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            maxZoom: 20,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1Ijoib3pidXJuMTIzIiwiYSI6ImNrcHlqcHV4NjA3Z2IycW1icGtqdHRjMWoifQ.pqpXaCphMSLVNUmPWlY3nQ'
        }).addTo(myMap);
        let marker = L.marker([19.4978, -99.1269]).addTo(myMap);
        marker.bindPopup("<b>Selecciona una tienda</b><br>Hola!!").openPopup();
    }

    /*update(){
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
    }*/


    map(){
        let myMap = L.map('mapid').setView([19.4978, -99.1269], 12);
        //let myMap = L.DomUtil.get(this.shadowRoot.getElementById("mapid")).setView([19.4978, -99.1269], 12);
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            maxZoom: 20,
            id: 'mapbox/streets-v11',
            tileSize: 512,
            zoomOffset: -1,
            accessToken: 'pk.eyJ1Ijoib3pidXJuMTIzIiwiYSI6ImNrcHlqcHV4NjA3Z2IycW1icGtqdHRjMWoifQ.pqpXaCphMSLVNUmPWlY3nQ'
        }).addTo(myMap);
        let marker = L.marker([19.4978, -99.1269]).addTo(myMap);
        marker.bindPopup("<b>Selecciona una tienda</b><br>Hola!!").openPopup();
    }

    render() {
        return html`
   <div id="mapid"></div>
    `;
    }
}

customElements.define('show-map', Map);
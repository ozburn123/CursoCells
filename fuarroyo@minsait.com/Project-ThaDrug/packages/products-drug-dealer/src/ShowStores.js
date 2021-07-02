import { html, css, LitElement } from 'lit-element';
import { Map } from './Map.js';
export class ShowStores extends LitElement {
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
        this.stores = [];
        this.latitude=0;
        this.longitude=0;
    }

    storeSelected(event){
        console.log(this.stores);
        const idStoreSelected=event.currentTarget.id;
        console.log(idStoreSelected);
       // const storeSelected=this.products[idStoreSelected].DESCRIPTION
        
        const latitude=this.stores[idStoreSelected].LATITUD;
        const longitude=this.stores[idStoreSelected].LONGITUD;
        console.log(latitude);
        console.log(longitude);
        this.latitude=latitude;
        this.longitude=longitude;
       /* this.dispatchEvent(new CustomEvent('get-cords',{
            detail:{
              latitude,longitude
            }
          }))*/
    }

    render() {
        return html`
        <h1>Tiendas Disponibles</h1>
        <div class="container">
            <div class="stores">
                ${this.stores.map((store) => {
                return html`
                <button  id="${store.ID}" name="${store.NAME}" @click="${this.storeSelected}"><b>${store.NAME} </b><b>${store.ADRESS}</b></button>
                `
            })}
            </div>
            <div><show-map .latitude="${this.latitude}" .longitude="${this.longitude}"></show-map></div>
        </div>
        
    `;
    }
}

customElements.define('show-stores', ShowStores);
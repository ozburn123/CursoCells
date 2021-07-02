import { html, css, LitElement } from 'lit-element';
import { InfoProducts } from './InfoProducts.js';
import { ShowStores } from './ShowStores.js';
export class ProductsDrugDealer extends LitElement {
  static get styles() {
    return css`
    * {
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
  img{
    filter: brightness(1.1);
    mix-blend-mode: multiply;
    width: 200px;
    height: 159.5px;
  }
  .form-cards{
    width:400px;
    padding:30px;
    margin:auto;
    margin-top:50px;
    color:black;
    text-align:left;
    font-family:"Montserrat", Sans-serif;
    text-align:center;
  }
  #product-name{
    padding:17px;
    border-radius:8px;
    background:#3ecf52;
    color:white;
    width:100%;
    margin-bottom:15px;
  }
  #level{
    padding:10px;
    border-top: 1px solid #000;
    margin-top:20px;
    background:rgba(232, 236, 241, 1);
    color:black;
    
  }
  h4{
    width:100%;
    font-weight: 500;
  }

  .buttonInfo{
    border-radius:6px;
      border-color:rgb(233, 212, 96);
      background:rgba(255,255,255,0.1);
      border-width: 2px;
      padding:10px;
      margin-top:20px;
      color:rgb(233, 212, 96);
      font-weight: 500;
      font-size:14px;
  }
  .buttonStore{
    border-radius:6px;
      border-color:#3ecf52;
      background:rgba(255,255,255,0.1);
      border-width: 2px;
      padding:10px;
      margin-top:20px;
      color:#3ecf52;
      font-weight: 500;
      font-size:14px;
  }

  .cards-principal{
    display:grid;
    grid-template-columns: repeat(2,1fr);
  }
  
  #title-principal{
    font-size:25px;
    padding:10px;
    text-align:center;
  }
  #title-secondary{
    font-size:15px;
    padding:10px;
    text-align:center;
  }
    `;
  }

  static get properties() {
    return {
      products: { type: Array },
      infoProductID:{type:Array},
      infoProduct: { type: String },
      imgProduct: { type: String },
      nameProduct:{type:String},
      stores:{type:Array},
      storesCompleted:{type:Array}
    };
  }

  constructor() {
    super();
    this.products = [];
    this.infoProduct = '';
    this.imgProduct = '';
    this.nameProduct='';
    this.stores=[];
    this.storesCompleted=[];
  }

  __getInfoProduct(event){
   const selection= event.currentTarget.id;
   console.log(selection);
    this.infoProduct=this.products[selection].DESCRIPTION;
    this.imgProduct=this.products[selection].IMG;
    this.nameProduct=this.products[selection].NAME;
  }

  __getFilterStores(event){
    const selection= event.currentTarget.id;
   const arr2= this.storesCompleted.filter(store=>store[selection]==="true");
     this.stores=[...arr2];
     console.log(this.stores);
  }

  render() {
    return html`
    <h1 id="title-principal">Distribuidores Legales de Marihuana en la Ciudad de México.</h1>
    <h3 id="title-secondary">Tha Drug Store te ofrece los mejores Dealers de la Ciudad de México para la compra de marihuana y cannabis de
      primera calidad, comestibles frescos, concentrados potentes, tópicos y tinturas, vaporizadores y productos de CBD.
    </h3>
    <div class="cards-principal">
    ${this.products.map((product) => {
      return html`
     <div class="form-cards">
       <h3 id="product-name">${product.NAME}</h3>
       <img src="${product.IMG}" alt="">
       <h4>Contenidos: ${product.AMOUNT}</h4>
       <input type="button" class="buttonStore" id="button-get" value="Donde adquirir" id="${product.NAME}" @click="${this.__getFilterStores}">
       <input type="button" href="#infoProducts" class="buttonInfo" id="${product.ID}" value="+Info" @click="${this.__getInfoProduct}">
       <h4 id="level">Nivel: ${product.LEVEL}</h4>
     </div>
     `
     })}
    </div>
    <div class="infoProducts" id="infoProducts">
      <info-products .infoProduct="${this.infoProduct}" .imgProduct=${this.imgProduct} id="infoProducts" .nameProduct="${this.nameProduct}"></info-products>
    </div>
    <div class="showStores" id="showStores">
      <show-stores .stores=${this.stores}></show-stores>
    </div>


    `;
  }
}

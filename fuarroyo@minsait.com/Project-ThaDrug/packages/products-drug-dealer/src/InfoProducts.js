import { html, css, LitElement } from 'lit-element';

export class InfoProducts extends LitElement {
  static get styles() {
    return css`
    img{
        filter: brightness(1.1);
        mix-blend-mode: multiply;
        width: 100%;
      }
      .container{
          display: flex;
          flex-direction:row;
          font-family:"Montserrat", Sans-serif;
      }
      .img-product{
          width: 1000px;
          
      }
      h2{
        font-family:"Montserrat", Sans-serif; 
        background:#3ecf52;
        padding:10px;
      }
    `;
  }

  static get properties() {
    return {
      infoProduct: { type: String },
      imgProduct: { type: String },
      nameProduct: { type: String },
    };
  }

  constructor() {
    super();
    this.infoProduct = '';
    this.imgProduct = '';
    this.nameProduct='';
  }


  render() {
    return html`
    <div><h2>${this.nameProduct}</h2></div>
    <div class="container">
    <div><p>${this.infoProduct}</p></div>
    <div class="img-product"><img src="${this.imgProduct}"></div>
    </div>
    `;
  }
}

customElements.define('info-products',InfoProducts);
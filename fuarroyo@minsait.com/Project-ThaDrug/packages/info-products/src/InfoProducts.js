import { html, css, LitElement } from 'lit-element';

export class InfoProducts extends LitElement {
  static get styles() {
    return css`
      
    `;
  }

  static get properties() {
    return {
      infoProduct: { type: String },
      imgProduct: { type: String },
    };
  }

  constructor() {
    super();
    this.infoProduct = '';
    this.infoProduct = '';
  }


  render() {
    return html`
      <p>${this.infoProduct}</p>
      <img src="${this.imgProduct}">
    `;
  }
}

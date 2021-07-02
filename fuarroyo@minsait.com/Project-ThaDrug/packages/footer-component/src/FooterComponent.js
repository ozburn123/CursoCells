import { html, css, LitElement } from 'lit-element';

export class FooterComponent extends LitElement {
  static get styles() {
    return css`
    .footer {
      left: 0;
      bottom: 0;
      width: 100%;
      padding:0.5%;
      background-color: rgba(218, 223, 225, 1);
      
      color: black;
      text-align: center;
    }
    `;
  }

  static get properties() {
    return {

    };
  }

  constructor() {
    super();

  }



  render() {
    return html`
      <div class="footer">
        <p>© 2021 Copyright: Tha Drug Store. All rights reserved. By Uriel Arroyo</p>
      </div>
    `;
  }
}

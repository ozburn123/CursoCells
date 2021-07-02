import { html, css, LitElement } from 'lit-element';

export class HeaderComponent extends LitElement {
  static get styles() {
    return css`
    .header {
      padding: 8px;
      text-align: center;
      background: #3ecf52;
      color: white;
      font-size: 15px;
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
      <div class="header">
        <h1>Tha Drug Dealer</h1>
      </div>
    `;
  }
}

import { html, css, LitElement } from 'lit-element';

export class ValidationForm extends LitElement {
  static get styles() {
    return css`
    * {
      margin:0;
      padding:0;
      box-sizing: border-box;
    }
    .form-inputs{
      width:400px;
      padding:30px;
      margin:auto;
      margin-top:20px;
      border-radius:4px;
      color:black;
      text-align:left;
    }
    .form{
      width:700px;
      text-align:center;
      margin:auto;
      margin-top:70px;
      border-radius:4px;
      color:black;
      font-family:"Montserrat", Sans-serif;
    }
    .controls{
      width:100%;
      background:rgba(255,255,255,0.1);
      color:black;
      padding:10px;
      border-radius:10px;
      border-width: 1px;
      margin-bottom:16px;
    }
    .check{
      width:100%;
    }
    .button{
      border-radius:6px;
      border-color:green;
      background:rgba(255,255,255,0.1);
      border-width: 2px;
      width:100%;
      margin-top:16px;
      padding:10px;
    }
    .form-inputs h3{
      margin-bottom:10px;
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

  __sendValidation(){
    const name=this.shadowRoot.getElementById("name").value;
    const date=this.shadowRoot.getElementById("date").value;
    const check=this.shadowRoot.getElementById("check").checked;
    
    this.dispatchEvent(new CustomEvent('get-validation',{
      detail:{
        name,date,check
      }
    }))
  }


  render() {
    return html`
    <div class="form">
      <h2>Primero tenemos que confirmar que seas mayor de edad</h2>
      <div class="form-inputs">
        <h3>Ingresa tu nombre</h3>
        <input class="controls" type="text" name="name" id="name" placeholder="Ingresa tu nombre">
        <h3>Ingresa tu fecha de nacimiento</h3>
        <input id="date" class="controls" type="date">
        <label class="check"><input type="checkbox" name="check" id="check"> Acepto decir la verdad</label>
        <input type="button" class="button" id="button" @click="${this.__sendValidation}" value="Ingresar">
      </div>
    </div>
      
    `;
  }
}

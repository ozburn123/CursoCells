import { LitElement, html, css } from 'lit-element';
import "@ozburn/footer-component"
import "@ozburn/validation-form"
import "@ozburn/header-component"
import "@ozburn/products-drug-dealer"
export class DrugDealerApp extends LitElement {
  static get properties() {
    return {
      products: { type: Array },
      option: { type: Number },
      dataStores: { type: Array }
    };
  }

  static get styles() {
    return css`
      
    `;
  }

  constructor() {
    super();
    this.title = 'My app';
    this.option = 0;
    this.products = [
      {
        NAME: "COMESTIBLE",
        DESCRIPTION: "Los comestibles de CBD son alimentos y bebidas que están mezclados con CBD. Te permiten disfrutar de los beneficios del CBD junto a tu comida favorita. Algunos ingredientes de cannabis son la mantequilla de Marrakesh, o la tintura de cannabis; Algunas preparaciones culinarias de cannabis son los space cakes o el majún. Algunas bebidas de cannabis son el té de cannabis o el bhang.",
        AMOUNT: "10g-100g",
        ID: 0,
        IMG: "../img/Comestible1.jpeg",
        LEVEL: "Bajo-Medio"
      },
      {
        NAME: "CONCENTRADO",
        DESCRIPTION: "Los concentrados de marihuana son productos con altas cantidades de cannabinoides y otras moléculas de la planta. Por lo general, estos vienen en forma de aceite o cera (de ahí el término coloquial “wax” = cera en inglés). Las concentraciones de cannabinoides en Wax pueden llegar hasta el 80%.",
        AMOUNT: "5g-10g",
        ID: 1,
        IMG: "../img/Concentrado1.jpg",
        LEVEL: "Experto"
      },
      {
        NAME: "TINTURA",
        ID: 2,
        DESCRIPTION: "Las tinturas son extractos de hierbas altamente concentrados. Son líquidas y normalmente se consumen en gotas. Dependiendo de la proporción entre los dos cannabinoides más abundantes, THC y CBD, puede ser utilizada para fines recreativos.",
        AMOUNT: "20ml-50ml",
        IMG: "../img/Tintura1.jpg",
        LEVEL: "Medio-Alto"
      },
      {
        NAME: "VAPORIZADOR",
        ID: 3,
        DESCRIPTION: "El vaping o vaporización se hace generalmente con un dispositivo electrónico compacto llamado vape o vaporizador, que calienta el concentrado (el aceite) o los brotes de cannabis para producir el vapor que luego inhalarás.",
        AMOUNT: "10ml-50ml",
        IMG: "../img/Vaporizador1.jpg",
        LEVEL: "Medio"
      },
      {
        NAME: "CBD",
        ID: 4,
        DESCRIPTION: "El CBD es extraído de la planta de cannabis y se agrega a aceites, cremas y bálsamos, líquidos para vapear, píldoras e incluso dulces como mentas y gomitas. Algunos informan que los efectos del CBD incluyen tanto la relajación física como mental, dolor e inflamación reducidos y un enfoque mejorado.",
        AMOUNT: "20ml-50ml",
        IMG: "../img/CBD1.jpg",
        LEVEL: "Experto"
      },
      {
        NAME: "CIGARRO",
        ID: 5,
        DESCRIPTION: "Un cigarro esta total o parcialmente relleno de cannabis. Se trata del formato más común de consumir marihuana y un solo porro puede contener entre 0.5 y 1g de esta droga. Es la manera mas común de consumir la planta seca de la Marihuana, ya que su costo es realtivamente accesible para cualquiera.",
        AMOUNT: "5pz-15pz",
        IMG: "../img/Cigarro1.jpg",
        LEVEL: "Medio-Alto"
      }
    ]
    this.dataStores = [

      {
        ID: 0,
        NAME: "Argentia Green: ",
        ADRESS: "Naranjo 348, Atlampa, Cuauhtémoc, 06450 Ciudad de México, CDMX",
        LATITUD: 19.45869651353519,
        LONGITUD: -99.15691280757504,
        COMESTIBLE: "true",
        CONCENTRADO: "false",
        TINTURA: "false",
        VAPORIZADOR: "true",
        CBD: "true",
        CIGARRO: "false"
      },
      {
        ID: 1,
        NAME: "Weed Land: ",
        ADRESS: "Beethoven S/N, Peralvillo, Cuauhtémoc, 06220 Ciudad de México, CDMX",
        LATITUD: 19.461536675620746,
        LONGITUD: -99.13488991230558,
        COMESTIBLE: "false",
        CONCENTRADO: "false",
        TINTURA: "true",
        VAPORIZADOR: "true",
        CBD: "false",
        CIGARRO: "true"
      },
      {
        ID: 2,
        NAME: "The Road Trip: ",
        ADRESS: "Francisco Ortega 30, Centro, Coyoacán, 04000 Carlowrie, CDMX",
        LATITUD: 19.34773959768314,
        LONGITUD: -99.16367427792298,
        COMESTIBLE: "true",
        CONCENTRADO: "true",
        TINTURA: "false",
        VAPORIZADOR: "true",
        CBD: "false",
        CIGARRO: "true"
      },
      {
        ID: 3,
        NAME: "False Ovni: ",
        ADRESS: "Pujilí 13, Lindavista Nte., Gustavo A. Madero, 07300 Ciudad de México, CDMX",
        LATITUD: 19.50018993684951,
        LONGITUD: -99.13053321269167,
        COMESTIBLE: "true",
        CONCENTRADO: "false",
        TINTURA: "true",
        VAPORIZADOR: "true",
        CBD: "false",
        CIGARRO: "true"
      },
      {
        ID: 4,
        NAME: "Rocket Racoon: ",
        ADRESS: "Jardines del Pedregal, 01900 Ciudad de México, CDMX",
        LATITUD: 19.327779648623167,
        LONGITUD: -99.21031638900652,
        COMESTIBLE: "false",
        CONCENTRADO: "true",
        TINTURA: "true",
        VAPORIZADOR: "true",
        CBD: "false",
        CIGARRO: "false"
      },
      {
        ID: 5,
        NAME: "Cenestetic: ",
        ADRESS: "Manuel M. Flores 5, Obrera, Cuauhtémoc, 06800 Ciudad de México, CDMX",
        LATITUD: 19.416781433170463,
        LONGITUD: -99.14323657505912,
        COMESTIBLE: "false",
        CONCENTRADO: "true",
        TINTURA: "false",
        VAPORIZADOR: "true",
        CBD: "false",
        CIGARRO: "true"
      },
      {
        ID: 6,
        NAME: "So High: ",
        ADRESS: "Matamoros 145, Tepito, Morelos, Cuauhtémoc, 06200 Ciudad de México, CDMX",
        LATITUD: 19.447014371250894,
        LONGITUD: -99.12960290444991,
        COMESTIBLE: "true",
        CONCENTRADO: "false",
        TINTURA: "false",
        VAPORIZADOR: "true",
        CBD: "false",
        CIGARRO: "true"
      },
      {
        ID: 7,
        NAME: "YWF: ",
        ADRESS: "Rivero 109-709, Tepito, Morelos, Cuauhtémoc, 06200 Ciudad de México, CDMX",
        LATITUD: 19.447267694890368,
        LONGITUD: -99.12655782905973,
        COMESTIBLE: "false",
        CONCENTRADO: "true",
        TINTURA: "true",
        VAPORIZADOR: "true",
        CBD: "false",
        CIGARRO: "true"
      },
      {
        ID: 8,
        NAME: "Marihuana Buy: ",
        ADRESS: "Av Ejército Nacional 746, Polanco, Miguel Hidalgo, 11540 Ciudad de México, CDMX",
        LATITUD: 19.43796255824964,
        LONGITUD: -99.19899088276655,
        COMESTIBLE: "false",
        CONCENTRADO: "true",
        TINTURA: "true",
        VAPORIZADOR: "false",
        CBD: "false",
        CIGARRO: "true"
      },
      {
        ID: 9,
        NAME: "Red Room: ",
        ADRESS: "Jardín Balbuena, Venustiano Carranza, 15900 Ciudad de México, CDMX",
        LATITUD: 19.413509393637046,
        LONGITUD: -99.10360090581018,
        COMESTIBLE: "true",
        CONCENTRADO: "false",
        TINTURA: "true",
        VAPORIZADOR: "true",
        CBD: "true",
        CIGARRO: "false"
      }
    ]
  }

  __validate(event) {
    const name = event.detail.name;
    const datePick = event.detail.date;
    const checkBox = event.detail.check;

    let date = new Date(Date.parse(datePick));
    let now = new Date();
    let edad = now.getFullYear() - date.getFullYear();

    console.log(this.option);
    if (name.length < 5) alert('Favor de ingresar un nombre valido');
    else if (edad < 18) alert('Lo sentimos no eres mayor de edad');
    else if (checkBox == false) alert('Favor de aceptar decir la verdad');
    else {
      localStorage.setItem('Access', 'true');
      this.option = 1;
      return;
    }
    this.option = 2;
  }

  render() {
    return html`
    <header-component></header-component>
    <main>
      ${this.option == 1 ? html`<products-drug-dealer .storesCompleted="${this.dataStores}" .stores="${this.dataStores}" .products="${this.products}"></products-drug-dealer>`
      : html`<validation-form @get-validation="${this.__validate}"></validation-form>`}
    </main>
    <footer-component></footer-component>
      
    `;
  }
}

class Vacantjob extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const vacantItem = document.createElement('div');
    vacantItem.setAttribute('class', 'vaga-item');

    const nameOfVacant = document.createElement('h4');
    nameOfVacant.setAttribute('class', 'titulo-vaga');
    nameOfVacant.textContent = this.getAttribute('name-of-vacant');

    const period = document.createElement('span');
    period.textContent = this.getAttribute('period');

    const wage = document.createElement('span');
    wage.textContent = this.getAttribute('wage');

    vacantItem.appendChild(nameOfVacant);
    vacantItem.appendChild(period);
    vacantItem.appendChild(wage);

    return vacantItem;
  }

  styles() {
    const style = document.createElement('style');
    style.textContent = `
      .vaga-item {
        padding: 24px 24px 28px 24px;
        margin-bottom: 24px;
        border: 1px solid #EAECF0;
        border-radius: 16px;
        box-shadow: 2px 2px 10px 0px rgba(44, 44, 44, 0.15);
      }
      
      .vaga-item span + span {
        margin-left: 24px;
      }
      
      .vaga-item span {
        color: #667085;
      }
      
      .titulo-vaga {
        font-size: 1.125em;
        font-weight: 500;
        color: #101828;
        margin: 0 0 32px 0;
      }
    `;

    return style;
  }
}

customElements.define('vaga-item', Vacantjob);
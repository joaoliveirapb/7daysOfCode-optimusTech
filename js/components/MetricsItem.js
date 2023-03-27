class Metricsitem extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const metricItem = document.createElement('div');
    metricItem.setAttribute('class', 'metrica-item');

    const numberMetric = document.createElement('span');
    numberMetric.setAttribute('class', 'numero-metricas');
    numberMetric.textContent = this.getAttribute('number-metric');

    const titleMetric = document.createElement('p');
    titleMetric.setAttribute('class', 'titulo-metricas');
    titleMetric.textContent = this.getAttribute('title-metric');

    const detailMetric = document.createElement('p');
    detailMetric.setAttribute('class', 'detalhes-metricas');
    detailMetric.textContent = this.getAttribute('detail-metric');

    metricItem.appendChild(numberMetric);
    metricItem.appendChild(titleMetric);
    metricItem.appendChild(detailMetric);

    return metricItem;
  }

  styles() {
    const style = document.createElement('style');
    style.textContent = `
      .metrica-item {
        text-align: center;
        width: 280px;
        animation: fromLeft .4s .3s backwards;
      }
      
      .numero-metricas {
        display: block;
        font-size: 3.75em;
        font-weight: 600;
        color: #8E2424;
        letter-spacing: -0.02em;
      }
      
      .titulo-metricas {
        font-size: 1.125em;
        font-weight: 500;
        color: #101828;
        margin-top: 12px;
        margin-bottom: 8px;
      }
      
      .detalhes-metricas {
        color: #667085;
      }

      @keyframes fromLeft {
        from {
          opacity: 0;
          transform: translateX(-100px);
        } to {
          opacity: 1;
          transform: translateX(0);
        }
      }
    `

    return style;
  }
}

customElements.define('metrica-item', Metricsitem);
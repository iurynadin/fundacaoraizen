class DownReportElement extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const lang = this.getAttribute('lang');
        var label = '';
        var link = '';
        if (lang == 'es') {
            label = 'Descargue el <span>Informe de actividades</span>';
            link = './pdf/fundacao_raizen_relatorio_de_atividades_2021_ES.pdf';
        } else if (lang == 'en') {
            label = 'Download <span>Activities report</span>';
            link = './pdf/fundacao_raizen_relatorio_de_atividades_2021_EN.pdf';
        } else {
            label = 'Baixar o <span>Relatório de Atividades</span>';
            link = './pdf/fundacao_raizen_relatorio_de_atividades_2021_PT.pdf';
        }

        this.innerHTML = `
        <a href="${link}" class="secondaryNav__btn group" target="_blank" download>
            <img src="./svgs/ico-relatorio.svg" alt="ico relatorio">
            <div>${label}</div>
        </a>
        `;
    }
}
window.customElements.define('wc-downreport', DownReportElement);
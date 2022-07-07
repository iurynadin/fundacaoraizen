class DownReportElement extends HTMLElement {
    constructor() {
        super(); 
    }
    connectedCallback() {
        const lang = this.getAttribute('lang');
        var label = '';
        var link = '';
        if(lang == 'es') {
            label = 'Descargue el <span>Informe de actividades</span>';
            link = '#';
        }else if(lang == 'en'){
            label = 'Download <span>Activities report</span>';
            link = '#';
        } else {
            label = 'Baixar o <span>Relatório de Atividades</span>';
            link = '#';
        }

        this.innerHTML = `
        <a href="#" class="secondaryNav__btn group">
            <img src="./svgs/ico-relatorio.svg" alt="ico relatorio">
            <div>${label}</div>
        </a>
        `;
    }
}
window.customElements.define('wc-downreport', DownReportElement);  
class MenuElementEn extends HTMLElement {
    constructor() {
        super(); 
    }
    connectedCallback() {
        this.innerHTML = `
            <li><a href="#quem_somos">1. About Us</a> </li>
            <li><a href="#destaques">2. Destaques do ano</a> </li>
            <li><a href="#ondeestamos">3. Where are we</a> </li>
            <li><a href="#mensagens">4. Messages from the leadership</a> </li>
            <li><a href="#programas">5. Programs</a> </li>
            <li class="small"><a href="#ativainfancia">5.1 Ativa Infância</a> </li>
            <li class="small"><a href="#ativajuventude">5.2 Ativa Juventude</a> </li>
            <li><a href="#leiamais">6. Read more</a></li>
        `;
    }
}
window.customElements.define('wc-menu-en', MenuElementEn);  
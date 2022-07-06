class MenuElement extends HTMLElement {
    constructor() {
        super(); 
    }
    connectedCallback() {
        this.innerHTML = `
            <li><a href="#quem_somos">1. Quiénes somos</a> </li>
            <li><a href="#destaques">2. Aspectos destacados del año</a> </li>
            <li><a href="#ondeestamos">3. Dónde estamos</a> </li>
            <li><a href="#mensagens">4. Mensajes de los líderes</a> </li>
            <li><a href="#programas">5. Programas</a> </li>
            <li class="small"><a href="#ativainfancia">5.1 Ativa Infância</a> </li>
            <li class="small"><a href="#ativajuventude">5.2 Ativa Juventude</a> </li>
            <li><a href="#leiamais">6. Leer más</a> </li>
        `;
    }
}
window.customElements.define('wc-menu-es', MenuElement);  
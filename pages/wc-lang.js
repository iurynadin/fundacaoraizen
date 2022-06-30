class LangElement extends HTMLElement {
    constructor() {
        super(); 
    }
    connectedCallback() {
        this.innerHTML = `
            <ul class="flex flex-row justify-end mb-2 gap-x-4">
                <li>
                    <a href="./" class="">
                        <img src="./svgs/pt.svg" class="w-8 hover:scale-110 transition-all duration-300" alt="">
                    </a>
                </li>
                <li>
                    <a href="./en.html">
                        <img src="./svgs/en.svg" class="w-8 hover:scale-110 transition-all duration-300" alt="">
                    </a>
                </li>
                <li>
                    <a href="./es.html">
                        <img src="./svgs/es.svg" class="w-8 hover:scale-110 transition-all duration-300" alt="">
                    </a>
                </li>
                
            </ul>
        `;
    }
}
window.customElements.define('wc-lang', LangElement);  
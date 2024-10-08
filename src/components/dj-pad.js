class DJPad extends HTMLElement {
    static observedAttributes = ["data-src"];

    constructor() {
        super();
      }
    
      connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });

        const src = this.dataset['src'];
        const key = this.dataset['key'].toUpperCase();
        const color = Math.floor(Math.random()*16777215).toString(16);

        const audio = document.createElement('audio');        
        audio.setAttribute('src', src);

        const wrapper = document.createElement('div');
        wrapper.classList.add('dj-pad__wrapper');

        const label = document.createElement('span');
        label.innerText = key;

        const style = document.createElement('style');

        style.textContent = `        
            .dj-pad__wrapper {
                height: 100px;
                width: 100px;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #${color};
                border-radius: 20px;
                transition: all 500ms;
                border: 5px solid black;
            }

            .dj-pad__wrapper[active] {
                border-color: yellow;               
            }
        `

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        wrapper.appendChild(audio);
        wrapper.appendChild(label);

        this.addEventListener('click', function(event) {                          
          this.play();
          wrapper.setAttribute('active', '');
                    
        }.bind(this))
        
        document.addEventListener('keypress', function(event) {          
          if (event.key.toUpperCase() === key) {                      
            this.play();
            wrapper.setAttribute('active', '');
          }
        }.bind(this))

        wrapper.addEventListener('transitionend', function(event) {
            wrapper.removeAttribute('active');
        })
        
        console.log("Custom element added to page.");
      }
    
      disconnectedCallback() {
        console.log("Custom element removed from page.");
      }
    
      adoptedCallback() {
        console.log("Custom element moved to new page.");
      }
    
      attributeChangedCallback(name, oldValue, newValue) {
        console.log(`Attribute ${name} has changed.`);
      }

    play() {
        this.shadowRoot.querySelector('audio').play();    
    };
}

customElements.define('dj-pad', DJPad);


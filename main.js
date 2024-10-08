import './style.css'
import './src/components/dj-pad'

document.querySelector('#app').innerHTML = `
  <h1>DJ Deck</h1>  
<div class="container">
    <dj-pad data-src="./sounds/deep.mp3" data-key="A"></dj-pad>
    <dj-pad data-src="./sounds/ding.mp3" data-key="S"></dj-pad>
    <dj-pad data-src="./sounds/kick-hardstyle.mp3" data-key="D"></dj-pad>
    <dj-pad data-src="./sounds/kick.mp3" data-key="F"></dj-pad>
    <dj-pad data-src="./sounds/vinyl-stop-sound-effect.mp3" data-key="G"></dj-pad>
    <dj-pad data-src="./sounds/deep.mp3" data-key="H"></dj-pad>
    <dj-pad data-src="./sounds/ding.mp3" data-key="J"></dj-pad>
    <dj-pad data-src="./sounds/kick-hardstyle.mp3" data-key="K"></dj-pad>
    <dj-pad data-src="./sounds/kick.mp3" data-key="L"></dj-pad>
    <dj-pad data-src="./sounds/vinyl-stop-sound-effect.mp3" data-key="Y"></dj-pad>
    <dj-pad data-src="./sounds/deep.mp3" data-key="X"></dj-pad>
    <dj-pad data-src="./sounds/ding.mp3" data-key="C"></dj-pad>
    <dj-pad data-src="./sounds/kick-hardstyle.mp3" data-key="V"></dj-pad>
    <dj-pad data-src="./sounds/kick.mp3" data-key="B"></dj-pad>
    <dj-pad data-src="./sounds/vinyl-stop-sound-effect.mp3" data-key="N"></dj-pad>
    <dj-pad data-src="./sounds/deep.mp3" data-key="M"></dj-pad>  
  </div>
`

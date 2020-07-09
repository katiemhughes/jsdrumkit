function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0; //rewind to start to play in succession
    audio.play();
    key.classList.toggle("playing");
    
    // setTimeout(() => {
    //     key.classList.toggle("playing");
        
    // }, 1000);
}


// function removeTransition(e) {
//     if (e.propertyName !== "transform") return;
//     this.classList.remove("playing");
// }

const keys = document.querySelectorAll(".key");

keys.forEach(key => key.addEventListener("transitionend", (e) => {        
    key.classList.remove("playing");
})); //we cannot use addEventListener here because keys is an array.

window.addEventListener("keydown", playSound);
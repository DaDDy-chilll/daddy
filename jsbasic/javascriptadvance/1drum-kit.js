window.addEventListener('keydown',function(e){
    const keyTag = document.querySelector(`div[id-key="${e.keyCode}"]`);
    if(!keyTag) return;
    const audioTag = document.querySelector(`audio[id-key='${e.keyCode}']`);
    audioTag.play();
    audioTag.currentTime=0;
    keyTag.classList.add('playing');
    // console.log(audioTag)
})
const keyDiv = document.querySelectorAll('.key');
keyDiv.forEach(key=>key.addEventListener('transitionend',function(e){
    this.classList.remove('playing')
}))
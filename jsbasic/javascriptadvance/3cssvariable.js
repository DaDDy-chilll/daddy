const inputs = document.querySelectorAll('input');
inputs.forEach(input => input.addEventListener('change',handleFunction));
inputs.forEach(input => input.addEventListener('mousemove',handleFunction));
function handleFunction(){
    if(this.dataset.sizing){
    const px = this.dataset.sizing || '';
    console.log(this.value)
    document.documentElement.style.setProperty(`--${this.name}`,this.value + px);
    }else{
        document.documentElement.style.setProperty(`--${this.name}`,this.value);
    }
}
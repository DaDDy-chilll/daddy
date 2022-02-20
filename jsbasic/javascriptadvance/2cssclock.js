const hourHnad = document.querySelector('.hourhand');
const minuteHnad = document.querySelector('.minutehand');
const secondHand = document.querySelector('.secondhand');
function setTime(){
    const now = new Date();
    const second = now.getSeconds();
    const secondDegree = ((second/60)*360)+90;
    secondHand.style.transform=`rotate(${secondDegree}deg)`;

    const minute = now.getMinutes();
    const minuteDegree = ((minute/60)*360) + ((second/60)*6)+90;
    minuteHnad.style.transform=`rotate(${minuteDegree}deg)`;

    const hour = now.getHours();
    const hourDegree = ((hour/12)*360) + ((minute/60)*30)+90;
    hourHnad.style.transform=`rotate(${hourDegree}deg)`;
    
    
}
setInterval(setTime,1000)

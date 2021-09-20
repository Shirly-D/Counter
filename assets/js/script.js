function counter(count, initialValue, lastValue, duration) {
    let startTime = null;
    let currTime = Date();  //get current time
    
    const display = (currTime) => {
        if(!startTime) {  //starttime null, then currtime value assigned to startTime
            startTime = currTime;
        }

        const time = Math.min((currTime - startTime)/duration, 1);  //cal value used in calculating no. that is to be displayed
        count.innerHTML = Math.floor(time * (lastValue - initialValue) + initialValue); //cal the value getting from time

        if(time < 1) {  //counter should not go beyound lastValue
            window.requestAnimationFrame(display);
        } else {
            window.cancelAnimationFrame(window.requestAnimationFrame(display));
        }
    };
    window.requestAnimationFrame(display);  
}

let countDisplay = document.querySelector('.display-count');

window.addEventListener ("load", () => {
    counter(countDisplay, 0, 1000, 6000);
})
























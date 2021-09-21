let speed = 200;

document.querySelectorAll('.display-count').forEach(counter => {
    let number = parseInt(counter.getAttribute('data-count'));
    let count = setInterval(() => {
        let displayCount = parseInt(counter.innerHTML);
        let time = number / speed;

        displayCount < number ? counter.innerHTML = Math.ceil(displayCount + time) : clearInterval(count);
    }, 5);
});
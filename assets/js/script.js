let countDisplay = document.querySelector('.display-count');
let countMinus = document.querySelector('.count-minus');
let countAdd = document.querySelector('.count-add');
let count = 0;

function numberDisplay() {
    countDisplay.innerHTML = count;
}

countMinus.addEventListener("click", () => {
    count--;
    numberDisplay();
})

countAdd.addEventListener("click", () => {
    count++;
    numberDisplay();
})
























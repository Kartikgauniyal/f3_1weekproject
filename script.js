let counting = 0;
const count = document.querySelector("#count");
const d = document.querySelector("#d");
const btni = document.querySelector("#btni");
const btnc = document.querySelector("#btnc");

let isError = false;
let isClearPress = false;

d.addEventListener('click', () => {
    if (counting === 1) {
        btnc.style.display = 'none';
    }
    if (counting <= 0 && !isError) {
        const error = document.createElement('p');
        error.className = 'error';
        error.innerText = '\'Error : Cannot go below 0\'';
        const newDiv = document.querySelector(".container");
        newDiv.insertAdjacentElement("afterend", error);
        error.style.color = 'red';
        error.style.marginTop = '2em';
        isError = true;

    } else if (counting > 0) {
        counting--;
        count.innerText = counting;

    }


})
btni.addEventListener('click', () => {
    counting++;
    count.innerText = counting;
    if (counting > 0) {
        btnc.style.display = 'inline';
    }
    if (isError) {
        const errorElement = document.querySelector('.error');
        if (errorElement) {
            errorElement.remove();
        }
        isError = false;
    }


})
btnc.addEventListener('click', () => {
    counting = 0;
    count.innerText = 0;
    btnc.style.display = 'none';
    if (isError) {
        const errorElement = document.querySelector('.error');
        if (errorElement) {
            errorElement.remove();
        }
        isError = false;
    }

})

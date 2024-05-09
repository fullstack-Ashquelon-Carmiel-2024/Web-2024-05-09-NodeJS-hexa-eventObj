const btnYellow = document.querySelector('.yellow')
const btnBlue = document.querySelector('.blue')
const btnGreen = document.querySelector('.green')
const btnSalmon = document.querySelector('.salmon')

const out1 = document.querySelector('#out1')

// Event object - is an object that consists of the 
// properties that describe the event that happened
function changeColor(event) {

    console.log(event.target)

    let color = event.target.innerText.toLowerCase();

    out1.classList.remove('blue');
    out1.classList.remove('green');
    out1.classList.remove('salmon');
    out1.classList.remove('yellow');
    out1.classList.add(color);

}

btnYellow.addEventListener('click',changeColor);
btnBlue.addEventListener('click',changeColor);
btnGreen.addEventListener('click',changeColor);
btnSalmon.addEventListener('click',changeColor);

// ar.forEach((elem,idx) => {})

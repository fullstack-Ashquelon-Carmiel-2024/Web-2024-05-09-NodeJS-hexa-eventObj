const btns = document.querySelectorAll('button');
const divs = document.querySelectorAll('.div');



const out1 = document.querySelector('#out1')

// Event object - is an object that consists of the 
// properties that describe the event that happened
function changeColor(event) {

    console.log(event.target)

    let color = event.target.innerText.toLowerCase();

    btns.forEach(btn => 
        out1.classList.remove(btn.innerText.toLowerCase()))
    /*
      cycle1: btn: "Blue"->"blue"
      cycle2: btn: "Green"->"green"
    */
            
    out1.classList.add(color);

}

function forDivs (ev) {

    console.log(ev);

    divs.forEach(div => div.innerText = '');
    ev.target.innerText = `It's me\n${ev.type}`;

}

btns.forEach(btn => 
    btn.addEventListener('click',changeColor)
)

divs.forEach(div => {
    div.addEventListener('mouseover',forDivs);
    div.addEventListener('mouseout',forDivs);
    div.addEventListener('click',forDivs);
    div.addEventListener('doubleclick',forDivs);
})

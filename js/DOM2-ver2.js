const btns = document.querySelectorAll('button');

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

btns.forEach(btn => 
    btn.addEventListener('click',changeColor)
)

// ar.forEach((elem,idx) => {})

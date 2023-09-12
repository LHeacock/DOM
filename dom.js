let squareCount = 0;


const button = document.createElement('button')
button.innerText = 'Add Square';
button.addEventListener('click', addSquares);

function addSquares() {
    let div = document.createElement('div');
    div.className = 'square';
    div.id = squareCount;
    squareCount++;
    let squareHolder = document.getElementById('squareHolder');
    squareHolder.appendChild(div)
    div.addEventListener('mouseenter', (event) => { showId(event) });
    div.addEventListener('mouseleave', (event) => { noId(event) });
    div.addEventListener('click', (event) => { colorWheel(event) });
    div.addEventListener('dblclick', (event) => { squareRemoval(event) });
};


function showId(event) {
    let div = event.target;
    div.innerText = div.id;
    div.style.color = 'white';
}

function noId(event) {
    let div = event.target;
    div.innerText = '';
}

function colorWheel(event) {
    let div = event.target;
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    div.style.backgroundColor = '#' + randomColor;

}
let buttonHolder = document.getElementById("buttonHolder");
buttonHolder.appendChild(button);

function squareRemoval(event) {
    let div = event.target;
    if (div.id % 2 == 0) {
        if (div.nextSibling) {
            div.nextSibling.remove()
        }
        else {
            alert("No next square to remove");
        }
    }
    else {
        if (div.previousSibling) {
            div.previousSibling.remove()
        }
        else {
            alert("No previous square to remove");
        }
    }
}


const square = document.createElement('square')


let color = "black";

function makeBoard(size) {
    let board_div = document.querySelector(".board");
    board_div.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board_div.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let squares = board_div.querySelectorAll("div")
    squares.forEach((div) => div.remove());

    let total = size * size;

    for (let i = 0; i < total; i++) {
        let square = document.createElement("div");
        square.addEventListener("mouseover", colorSquare);
        board_div.style.backgroundColor = "white";
        board_div.insertAdjacentElement("beforeend", square);
    }
}

function changeSize(num) {
    if (num >= 2 && num <= 100) {
        makeBoard(num);
    }
    else {
        console.log("Too many or too little squares")
    }
}

function colorSquare() {
    if(color === 'random'){
        this.style.backgroundColor =`hsl(${Math.random()*360},100%,50%)`;
    }
    this.style.backgroundColor = color;
}

function changeColor(choice) {

    color = choice;

}

function resetBoard() {
    let board_div = document.querySelector(".board");
    let squares = board_div.querySelectorAll("div")
    squares.forEach((div) => div.style.backgroundColor = 'white');
}



makeBoard(16);


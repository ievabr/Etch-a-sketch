let container = document.querySelector(".container");
let btnRandom = document.querySelector("#random-col");
let btnReset = document.querySelector("#reset");
let btnBlack = document.querySelector("#black-col");

function addGrid(gridAmount){
    let gridSize = (500 / gridAmount) - 2;
    let gridsTotal = Math.pow(gridAmount, 2);
     while (gridsTotal > 0){
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", changeToBlack);
        cell.classList.add("grid");
        cell.style.width = gridSize + "px";
        cell.style.height = gridSize + "px";
        container.appendChild(cell);
        gridsTotal --;
    }
}

window.addEventListener("load", () => addGrid(16))

function changeToRandom(){
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let rgb = `rgb(${r},${g},${b})`;
    this.style.backgroundColor = rgb;
}

function changeToBlack(){
    this.style.backgroundColor = "black"
    }

btnRandom.addEventListener("click", () => {
    let cells = document.querySelectorAll(".grid");
    cells.forEach(cell => {
        cell.removeEventListener("mouseover", changeToBlack)
        cell.addEventListener("mouseover", changeToRandom)
    })
})
btnBlack.addEventListener("click", () => {
    let cells = document.querySelectorAll(".grid");
    cells.forEach(cell => {
        cell.removeEventListener("mouseover", changeToRandom)
        cell.addEventListener("mouseover", changeToBlack)
    })
})


function reset(){
    let cells = document.querySelectorAll(".grid");
    cells.forEach(cell => cell.style.backgroundColor = "white");
}

btnReset.addEventListener("click", reset);


function clear() {
    container.replaceChildren();
    }

let btnBoxCount = document.querySelector("#box-n");
btnBoxCount.addEventListener("click", () => {
    let answer = prompt("Please specify the grid size: ");
    if(answer == null) {
        return
    }
    let n = Number(answer);
    if(!Number.isInteger(n) || n < 0 || n > 100){
        alert("Please enter a number between 0 and 100")
        return
    }
    clear();
    addGrid(n);
})




let gradeCount = 0;

//prompt user for grid size
let gridsize = prompt("Pick a grid size");

const body = document.querySelector("body");
body.style.cssText = "overflow:auto; width: 960px"

//create div to contain grid
const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
gridContainer.style.cssText = `display: inline-grid; grid-template-columns: repeat(${gridsize}, auto); grid-template-rows: repeat(${gridsize}, auto);width: 960px; height: 960px; overflow: auto;`

//create grid
for (i = 0; i < (Math.pow(gridsize, 2)); i++) {
    let grid = document.createElement("div");
    grid.classList.add("grid-item");
    grid.style.cssText = "text-align: center;border-style: solid; border-width: 1px;"
    gridContainer.append(grid);
}

body.append(gridContainer);

//pick a random color
function randomCol(e) {
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
    e.target.style.backgroundColor = `${randomColor}`;
}

function blackGrade(e) {
    // let grades = ["#E5E5E5","#CCCCCC","#B2B2B2","#999999","#7F7F7F","#666666","#4C4C4C","#333333","#191919","#000000"];

    let grades = [
        "rgb(229, 229, 229)", //10%
        "rgb(204, 204, 204)", //20%
        "rgb(178, 178, 178)", //30%
        "rgb(153, 153, 153)", //40%
        "rgb(127, 127, 127)", //50%
        "rgb(102, 102, 102)", //60%
        "rgb(76, 76, 76)", //70%
        "rgb(51, 51, 51)", //80%
        "rgb(25, 25, 25)", //90%
        "rgb(0, 0, 0)" //100%
    ];

    if (e.target.style.backgroundColor == "") { //if white, set to 10%
        e.target.style.backgroundColor = grades[0];
    }
    else if (e.target.style.backgroundColor == grades[9]) { //check if already black
        e.target.style.backgroundColor = grades[9];
    }
    else {
        //check current color and array location
        let currentGrade = e.target.style.backgroundColor;
        let gradeIndex = grades.indexOf(currentGrade);
        //increment color
        e.target.style.backgroundColor = grades[gradeIndex + 1];
    }
}

function clearGrids() {
    grids.forEach(grid => grid.style.backgroundColor = "white");
}

//create event to change color on mouseenter
const grids = Array.from(document.querySelectorAll(".grid-item"));
grids.forEach(grid => grid.addEventListener('mouseenter', blackGrade));

//create reset button
const btn = document.createElement("button");
btn.innerText = "Reset";
btn.addEventListener('click', clearGrids);
document.body.append(btn);
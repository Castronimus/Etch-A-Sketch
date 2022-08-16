let grid = document.querySelector(".grid")

for (let counter=1;counter<=256;counter++) {
    const div = document.createElement("div");
    grid.appendChild(div);    
};

const hover = document.querySelectorAll(".grid div");

hover.forEach((div) => {
    div.addEventListener("mouseover", () => {
        console.log("UWU YOU HOVER ME");
        div.style.backgroundColor = "black";
    });
});

const button = document.querySelector("button");
const body = document.querySelector("body");
const gridDiv = document.querySelector(".grid")

button.addEventListener("click", () => {
    let answer = prompt("Please put the number of squares per side of the new grid");
    gridDiv.innerHTML = "";
    grid.style.height = `${answer}em`;
    grid.style.width = `${answer}em`;
    for (let counter=1;counter<=answer*answer;counter++) {
        const div = document.createElement("div");
        grid.appendChild(div);    
    }; 
});
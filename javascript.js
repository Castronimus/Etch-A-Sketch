const grid = document.querySelector(".grid")

for (let counter=1;counter<=256;counter++) {
    const div = document.createElement("div");
    grid.appendChild(div);    
};

const hover = document.querySelectorAll(".grid div");

hover.forEach((div) => {
    div.addEventListener("mouseover", () => {
        console.log("UWU YOU HOVER ME")
        div.style.backgroundColor = "black";
    });
});

const button = document.querySelector("button");

button.addEventListener("click", () => {
    let answer = prompt("Please put the number of squares per side of the new grid")
});
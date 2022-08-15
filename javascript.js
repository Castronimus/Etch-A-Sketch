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


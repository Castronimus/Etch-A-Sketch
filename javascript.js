const grid = document.querySelector(".grid")

for (let counter=1;counter<=16;counter++) {
    const div = document.createElement("div");
    grid.appendChild(div);
    div.textContent = "OWO";
}
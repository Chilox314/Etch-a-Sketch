const sketchArea = document.getElementById("sketchArea")

function createSketchArea(width) {
    sketchArea.innerHTML = "";
    for (let i = 1; i <= width**2; i++) {
        const divs = document.createElement("div");
        divs.classList.add("square");
        divs.style.width = 100/width + "%";
        divs.style.height = 100/width + "%";
        sketchArea.appendChild(divs);
    }
}
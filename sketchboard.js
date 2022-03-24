const sketchArea = document.getElementById("sketchArea")
const reset = document.getElementById("reset")

function createSketchArea(width) {
    sketchArea.innerHTML = "";
    for (let i = 1; i <= width**2; i++) {
        const divs = document.createElement("div");
        divs.classList.add("square");
        divs.style.width = 100/width + "%";
        divs.style.height = 100/width + "%";
        divs.addEventListener("mouseover", function(){
            divs.style.backgroundColor = "black";   
        })
        sketchArea.appendChild(divs);
    }
}

reset.addEventListener("click", function(){
    let numberOfSquares = prompt("Enter a number between 1 and 64");
    createSketchArea(numberOfSquares);
});
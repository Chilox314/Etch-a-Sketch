const sketchArea = document.getElementById("sketchArea")
const reset = document.getElementById("reset")

//changing the grid size by using slider & display current size
const sizeValue = document.getElementById("sizeValue")
const gridSlider = document.getElementById("gridslider")

gridSlider.onmousemove = (e) => updateSizeValue(e.target.value)
gridSlider.onchange = (e) => createSketchArea(e.target.value)

function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`
}

//create the Area
function createSketchArea(width) {
    sketchArea.innerHTML = "";
    for (let i = 1; i <= width**2; i++) {
        const divs = document.createElement("div");
        divs.classList.add("square");
        divs.style.width = 100/width + "%";
        divs.style.height = 100/width + "%";
        divs.addEventListener("mouseover", function(){ //search for a way to make a click and hover event
            divs.style.backgroundColor = "black";
        })
        sketchArea.appendChild(divs);
    }
}
//reset the Area
reset.addEventListener("click", function(){
    createSketchArea(gridSlider.value)
});

createSketchArea(8);
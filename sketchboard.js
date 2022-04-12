//To Do: Rainbow-Mode, UI, Design
let mouseDown = false
const sketchArea = document.getElementById("sketchArea")
const reset = document.getElementById("reset")
let color = "#000000"

//The colorpicker
const colorPicker = document.getElementById("colorpicker")
colorPicker.onchange = (e) => updateColor(e.target.value);
function updateColor(value) {
    color = value;
}

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
        divs.addEventListener("mouseover", function(){
            if (mouseDown) {
                divs.style.backgroundColor = color;
            };
        });
        divs.addEventListener("mousedown", function(){
            divs.style.backgroundColor = color;
        });
        sketchArea.appendChild(divs);
    }
}

//reset the Area
reset.addEventListener("click", function(){
    createSketchArea(gridSlider.value)
});

createSketchArea(8);

//only draw if mouse is clicked
sketchArea.addEventListener("mousedown", function(){
    mouseDown = true;
})
sketchArea.addEventListener("mouseup", function(){
    mouseDown = false;
} )
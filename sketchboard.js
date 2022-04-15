let mouseDown = false
const sketchArea = document.getElementById("sketchArea")
const reset = document.getElementById("reset")
let color = "#000000"

//the colorpicker
const colorPicker = document.getElementById("colorpicker")
const colorPickerWrapper = document.getElementById("color-picker-wrapper");
colorPicker.onchange = (e) => updateColor(e.target.value);
function updateColor(value) {
    color = value;
    colorPickerWrapper.style.backgroundColor = value;
}

//the rainbowmode
function randomColor() {
    let options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "a", "b", "c", "d", "e", "f"];
    let randomColorResult = "#";
    for (let i = 0; i < 6; i++) {
        randomColorResult += options[Math.floor(Math.random() * 16)]
    };
    return randomColorResult;
};
let rainbowmode = false;
const rainbowmodeBtn = document.getElementById("rainbowmode");
rainbowmodeBtn.addEventListener("click", function() {
    rainbowmode = rainbowmodeBtn.checked;
});


//changing the grid size by using slider & display current size
const sizeValue = document.getElementById("sizeValue")
const gridSlider = document.getElementById("gridslider")

gridSlider.onmousemove = (e) => updateSizeValue(e.target.value)
gridSlider.onchange = (e) => createSketchArea(e.target.value)

function updateSizeValue(value) {
    sizeValue.innerHTML = `Size: ${value} x ${value}`
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
                if (rainbowmode) {
                    divs.style.backgroundColor = randomColor();
                }
                else {
                divs.style.backgroundColor = color;
                };
            };
        });
        divs.addEventListener("mousedown", function(){
            if (rainbowmode) {
                divs.style.backgroundColor = randomColor();
            }
            else {
            divs.style.backgroundColor = color;
            };
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
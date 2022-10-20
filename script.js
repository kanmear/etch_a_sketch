const gridContainer = document.querySelector('.grid-container')
const slider = document.querySelector('.slider')
const sliderValue = document.querySelector('.slider-value')

const pencilButton = document.querySelector('.pencil-button')
const eraserButton = document.querySelector('.eraser-button')

pencilButton.addEventListener('click', () => {
    currentMode = Modes.PENCIL
    pencilButton.classList.add('active-button')
    eraserButton.classList.remove('active-button')
})

eraserButton.addEventListener('click', () => {
    currentMode = Modes.ERASER
    eraserButton.classList.add('active-button')
    pencilButton.classList.remove('active-button')
})

const Modes = {PENCIL: 'pencil', ERASER: 'eraser'}

let isMouseDown = false
let currentMode = Modes.PENCIL

document.body.onmousedown = () => isMouseDown = true
document.body.onmouseup = () => isMouseDown = false
document.body.onmouseleave = () => isMouseDown = false

document.body.addEventListener('dragstart', (element) => element.preventDefault())

gridContainer.addEventListener('mouseover', (event) => {
    let element = event.target
    if (isMouseDown) {
        if (currentMode == Modes.PENCIL)
            element.classList.add('cell-active')
        else if (currentMode == Modes.ERASER)
            element.classList.remove('cell-active')
    }
})

gridContainer.addEventListener('mousedown', (event) => {
    let element = event.target
    if (currentMode == Modes.PENCIL)
        element.classList.add('cell-active')
    else if (currentMode == Modes.ERASER)
        element.classList.remove('cell-active')
})

slider.addEventListener('input', () => {
    generateGrid(slider.value)
    sliderValue.innerHTML = slider.value + 'x' + slider.value
})

function generateGrid(size) {
    document.querySelectorAll('.grid-row').forEach(c => c.remove())
    document.querySelectorAll('.cell').forEach(c => c.remove())

    for (let i = 0; i < size; i++) {
        let row = document.createElement('div')
        row.className = 'grid-row'
        for (let j = 0; j < size; j++) {
            let cell = document.createElement('div')
            cell.className = 'cell'
            row.appendChild(cell)
        }
        gridContainer.appendChild(row)
    }
}

//testing
generateGrid(12)
sliderValue.innerHTML = slider.value + 'x' + slider.value
const gridContainer = document.querySelector('.grid-container')
const slider = document.querySelector('.slider')
const sliderValue = document.querySelector('.slider-value')

let isMouseDown = false

function generateGrid(size) {
    document.querySelectorAll('.grid-row').forEach(c => c.remove())
    document.querySelectorAll('.cell').forEach(c => c.remove())

    const grid = []
    for (let i = 0; i < size; i++) {
        let row = document.createElement('div')
        row.className = 'grid-row'
        // grid[i] = row
        for (let j = 0; j < size; j++) {
            let cell = document.createElement('div')
            cell.className = 'cell'
            row.appendChild(cell)
            // grid[i][j] = elem
        }
        gridContainer.appendChild(row)
    }
}

slider.addEventListener('input', () => {
    generateGrid(slider.value)
    sliderValue.innerHTML = slider.value + 'x' + slider.value
})

document.body.onmousedown = () => isMouseDown = true
document.body.onmouseup = () => isMouseDown = false
document.body.onmouseleave = () => isMouseDown = false

gridContainer.addEventListener('mouseover', (event) => {
    let element = event.target
    if (isMouseDown) {
        element.classList.add('cell-active')
    }
})

document.body.addEventListener('dragstart', (element) => element.preventDefault())

//testing
generateGrid(12)
sliderValue.innerHTML = slider.value + 'x' + slider.value
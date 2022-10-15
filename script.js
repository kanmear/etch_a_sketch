const gridContainer = document.querySelector('.grid-container')

function generateGrid(size) {
    const grid = []
    const gridSide = getComputedStyle(gridContainer).height.slice(0, -2)
    for (let i = 0; i < size; i++) {
        grid[i] = document.createElement('div')
        grid[i].classList.add('grid-row')
        for (let j = 0; j < size; j++) {
            grid[i][j] = document.createElement('div')
            grid[i][j].classList.add("cell")
            grid[i].appendChild(grid[i][j])
        }
        gridContainer.appendChild(grid[i])
    }
    document.querySelectorAll('.cell').forEach(c => {
        c.style.height = gridSide / size + 'px'
        c.style.width = gridSide / size + 'px'
    })
    
}

//testing
generateGrid(28)
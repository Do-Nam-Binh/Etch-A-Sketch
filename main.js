const container = document.querySelector('.container');
const grid = document.createElement('div');
grid.classList.add('grid');


const onePixel = document.createElement('div');
onePixel.classList.add('onePixel');

grid.addEventListener('mouseover', e => e.target.classList.add('activatedPixel'));




function makeGrid(pixel){
    
    for(let j = 0; j < pixel*pixel; j++){            
        
        grid.appendChild(onePixel.cloneNode(true));
    }
    container.appendChild(grid)
    grid.style.gridTemplateColumns = "repeat(" + pixel + ", 1fr)";
}

makeGrid(5);
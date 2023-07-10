const container = document.querySelector('.container');
const grid = document.createElement('div');
grid.classList.add('grid');


const onePixel = document.createElement('div');
onePixel.classList.add('onePixel');

grid.addEventListener('mouseover', e => e.target.classList.add('activatedPixel'));



function makeGrid(){
    
    pixel = prompt('Please enter canvas size');

    if(!Number.isInteger(parseInt(pixel))){
        alert("Invalid value");
        return;
    }

    if(pixel > 100 || pixel < 1){
        alert("Please enter a value between 1 and 100");
        return;
    }

    grid.replaceChildren();

    for(let j = 0; j < pixel*pixel; j++){            
        
        grid.appendChild(onePixel.cloneNode(true));
    }
    container.appendChild(grid)
    grid.style.gridTemplateColumns = "repeat(" + pixel + ", 1fr)";
    grid.classList.remove('activatedPixel');
}

function defaultGrid(){
    
    pixel = 16

    if(!Number.isInteger(parseInt(pixel))){
        alert("Invalid value");
        return;
    }

    if(pixel > 100 || pixel < 1){
        alert("Please enter a value between 1 and 100");
        return;
    }

    grid.replaceChildren();

    for(let j = 0; j < pixel*pixel; j++){            
        
        grid.appendChild(onePixel.cloneNode(true));
    }
    container.appendChild(grid)
    grid.style.gridTemplateColumns = "repeat(" + pixel + ", 1fr)";
    grid.classList.remove('activatedPixel');
}

defaultGrid();
const button = document.querySelector('.setSize');
button.addEventListener('click', makeGrid);

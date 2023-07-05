const container = document.querySelector('.container');
const row = document.createElement('div');
row.classList.add('row');


const onePixel = document.createElement('div');
onePixel.classList.add('onePixel');
onePixel.addEventListener('mouseenter', this.activatePixel);

function activatePixel(){
    this.classList.remove('onePixel');
    this.classList.add('activatedPixel');
}



function makeGrid(pixel){
    for(let j = 0; j < pixel; j++){            
        
        row.appendChild(onePixel.cloneNode(true));
    }
    
    for(let i = 0; i < pixel; i++){
        
        container.appendChild(row.cloneNode(true));
    }
}

makeGrid(16);
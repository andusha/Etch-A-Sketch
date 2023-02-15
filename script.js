"use strict";
const main = document.querySelector('.main');
const size = document.querySelector('.size-slider');
const sizeValue = document.querySelector('.size-value');
const color = document.querySelector('.color-setting');
const reset = document.querySelector('.reset')
const rgbMode = document.querySelector('.rgb-mode')
const colorMode = document.querySelector('.color-mode')

let mode = 0

reset.onclick = () => gridResize();
size.onchange = () => gridResize();
size.onmousemove = (e) => updateSizeValue(e.target.value);
rgbMode.onclick = () => currentMode(1);
colorMode.onclick = () => currentMode(0);



function currentMode(current){
    mode = current
};

function createDiv(){
    const div = document.createElement('div');
    div.classList.add('div-color');
    div.addEventListener('mouseover', changeMode);
    div.addEventListener('click', changeMode);
    return div
};

function updateSizeValue(value) {
    sizeValue.innerHTML = `${value} x ${value}`
  };

function gridResize(){
    main.innerHTML = '';
    main.style.setProperty('--size', size.value)
    for (let i = 0; i < size.value*size.value; i++){
        main.appendChild(createDiv())
}};

function rgb(){
    let arr = []
    for (let i = 0; i < 3; i++){
        arr.push(Math.floor(Math.random() * 255))
    };
    return arr
};

function changeMode(){
    if (event.which === 1){
        if (mode === 0) {
            //this.style.setProperty('--color', 'rgba(0, 0, 0, 0.1)');
            this.style.setProperty('--color', color.value);
            let styles = window.getComputedStyle(this)
            console.log(styles.getPropertyValue('--color').slice(-4, -1))
    } else if (mode === 1) this.style.setProperty('--color', `rgb(${rgb()[0]} ${rgb()[1]} ${rgb()[2]})`);
        
    else if (mode === 2) {
            console.log(this)
        };
    }
};


for (let i = 0; i < size.value*size.value; i++){
    main.appendChild(createDiv())
};
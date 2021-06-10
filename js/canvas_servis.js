'use strict'

var gCanvas;
var gCtx;

function init() {
    gCanvas = document.querySelector('canvas');       
    gCtx = gCanvas.getContext('2d');
    resizeCanvas()
}


function resizeCanvas() {
    var elCanvasContainer = document.querySelector('.canvas-container')
    gCanvas.width = elCanvasContainer.offsetWidth
    gCanvas.height = elCanvasContainer.offsetHeight
}


function drawImgOnCanvas(src) {
    resizeCanvas()
    var img = new Image()
    img.src = src;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
    }
   
}

function renderCanvas(){
    resizeCanvas()
    var img = new Image()
    img.src = gCurrImg.src;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        printText(gMeme.topLine.text)
    }
}

function printText(text){

    gCtx.fillStyle = gMeme.topLine.fillColor
    
    gCtx.font = gMeme.topLine.fontSize
    gCtx.fillText(text, 100, 100);

}
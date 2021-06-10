'use strict'

var gCanvas;
var gCtx;

function init() {
    gCanvas = document.querySelector('canvas');
    gCtx = gCanvas.getContext('2d');
    resizeCanvas()
    renderGallery()
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

function renderCanvas() {
    resizeCanvas()
    var img = new Image()
    img.src = gCurrImg.src;
    img.onload = () => {
        gCtx.drawImage(img, 0, 0, gCanvas.width, gCanvas.height)
        printText()
    }
}

function printText() {
    gCtx.lineWidth = 1
    gCtx.textAlign = 'center'

    gCtx.fillStyle = gMeme.topLine.fillColor
    gCtx.strokeStyle = gMeme.topLine.strokeColor
    gCtx.font = gMeme.topLine.fontSize
    gCtx.fillText(gMeme.topLine.text, gCanvas.width * gMeme.topLine.textAline, gCanvas.height * 0.15);
    gCtx.strokeText(gMeme.topLine.text, gCanvas.width * gMeme.topLine.textAline, gCanvas.height * 0.15);


    gCtx.fillStyle = gMeme.bottomLine.fillColor
    gCtx.strokeStyle = gMeme.bottomLine.strokeColor
    gCtx.font = gMeme.bottomLine.fontSize
    gCtx.fillText(gMeme.bottomLine.text, gCanvas.width * gMeme.bottomLine.textAline, gCanvas.height * 0.85);
    gCtx.strokeText(gMeme.bottomLine.text, gCanvas.width * gMeme.bottomLine.textAline, gCanvas.height * 0.85);


}
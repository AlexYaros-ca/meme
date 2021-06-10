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
        printText(gMeme.topLine.text)
    }
}

function printText(text) {
    var txtPos;
    var txtAline;
    if (gLine === 1) {
        txtPos = 0.15
    } else if (gLine === 2) {
        txtPos = 0.5
    } else {
        txtPos = 0.85
    }
    if (gAline === 'right') {
        txtAline = 0.75
    } else if (gAline === 'center') {
        txtAline = 0.5
    } else {
        txtAline = 0.15
    }

    gCtx.lineWidth = 1
    gCtx.fillStyle = gMeme.topLine.fillColor
    gCtx.strokeStyle = gMeme.topLine.strokeColor
    gCtx.font = gMeme.topLine.fontSize
    gCtx.textAlign = 'center'
    gCtx.fillText(text, gCanvas.width * txtAline, gCanvas.height * txtPos);
    gCtx.strokeText(text, gCanvas.width * txtAline, gCanvas.height * txtPos);

}
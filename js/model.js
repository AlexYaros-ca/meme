'use strict'

var gCurrImg;
var isTopLine = true;
const IMAGES = createIMAGES();

function init() {
    gCanvas = document.querySelector('canvas');
    gCtx = gCanvas.getContext('2d');
    resizeCanvas()
    renderGallery()
}


var gMeme = {
    imgId: null,
    topLine: {
        text: '',
        fontSize: '30px Impact',
        fillColor: 'red',
        strokeColor: 'white',
        textAline: 0.5
    },
    bottomLine: {
        text: '',
        fontSize: '30px Impact',
        fillColor: 'red',
        strokeColor: 'white',
        textAline: 0.5
    }

}

function createIMAGES() {
    var images = []
    for (var i = 0; i < 18; i++) {
        images[i] = {
            id: ''+ (i + 1),
            src: 'img/' + (i + 1) + '.jpg'
        }
    }
    return images;
}

function createImagesStrHTML() {
    var strHTML = ''
    for (var i = 1; i < 19; i++) {
        strHTML += `<img id=${i} onclick="onImgClick(this)" src="img/${i}.jpg">`
    }
    return strHTML;
}

function setCurrImg(id) {
    var currImg = null;
    IMAGES.forEach(function (img) {
        if (img.id === id) {
            currImg = img
            return;
        }
    })
    gCurrImg = currImg    
    drawImgOnCanvas(gCurrImg.src)
}

function setFontSize(fontSize) {
    if(isTopLine){
        gMeme.topLine.fontSize = fontSize + 'px Impact';        
    } else {        
        gMeme.bottomLine.fontSize = fontSize + 'px Impact';
    }
}

function setMemeTxt(txt) {
    if(isTopLine){
        gMeme.topLine.text = txt;        
    } else {
        gMeme.bottomLine.text = txt;
    }
}

function SetFillColor(color) {
    if(isTopLine){
        gMeme.topLine.fillColor = color;
    } else {
        gMeme.bottomLine.fillColor = color;
    }
}

function SetStrokeColor(color) {
    if(isTopLine){
        gMeme.topLine.strokeColor = color;
    } else {
        gMeme.bottomLine.strokeColor = color;
    }
}

function setTxtAline(aline) {
    var xPosMult;
    if (aline === 'right') {
        xPosMult = 0.75
    } else if (aline === 'center') {
        xPosMult = 0.5
    } else {
        xPosMult = 0.15
    }


    if(isTopLine){
        gMeme.topLine.textAline = xPosMult;
    } else {
        gMeme.bottomLine.textAline = xPosMult;
    }
}

function setLine() {
    isTopLine = !isTopLine;    
}




'use strict'

var gCurrImg;
var gLine = 1;
var gAline = 'right'


var image1 = {
    id: '1',
    src: 'img/1.jpg',
    keyWords: ['funny', 'pollitics']
}
var image2 = {
    id: '2',
    src: 'img/2.jpg',
    keyWords: ['sweet', 'animals']
}

const IMAGES = [image1, image2];


function createImagesStrHTML(){
    var strHTML = ''
    for(var i = 1; i < 19; i++){
       strHTML+= `<img id=${i} onclick="onImgClick(this)" src="img/${i}.jpg">`    
    }
    return strHTML;
}

var gMeme = {
    imgId: null,
    topLine: {
        text: '',
        fontSize: '30px Impact',
        fillColor: 'red',
        strokeColor: 'white'
    },
    bottomLine: {
        text: '',
        fontSize: '30px Impact',
        fillColor: 'red',
        strokeColor: 'white'
    }

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
    gMeme.topLine.fontSize = fontSize + 'px Impact';
}

function setMemeTxt(txt) {
    gMeme.topLine.text = txt;
}

function SetFillColor(color) {
    gMeme.topLine.fillColor = color;
}

function SetStrokeColor(color) {
    gMeme.topLine.strokeColor = color;
}

function setLine() {
    gLine++
    if (gLine === 4) gLine = 1;
}

function setTxtAline(aline){
    gAline = aline;
}



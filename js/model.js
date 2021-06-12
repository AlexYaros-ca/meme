'use strict'

var gCurrImg;
var gIsTopLine = true;
const IMAGES = createIMAGES();
const STORAGE_KEY = 'MemeDB'
var gMyMemes = loadMyMeme()
var gIsGallery = true;


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
        fontSize: 30,
        fillColor: 'red',
        strokeColor: 'white',
        textAlign: 0.5
    },
    bottomLine: {
        text: '',
        fontSize: 30,
        fillColor: 'red',
        strokeColor: 'white',
        textAlign: 0.5
    }

}

function createIMAGES() {
    var images = []
    for (var i = 0; i < 18; i++) {
        images[i] = {
            id: '' + (i + 1),
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
    if(gIsGallery){

        IMAGES.forEach(function (img) {
            if (img.id === id) {
                currImg = img
                return;
            }
        })
        gCurrImg = currImg
        drawImgOnCanvas(gCurrImg.src)
    } else {
        gCurrImg = gMyMemes[id-1]
        drawImgOnCanvas(gCurrImg.imgData)
    }
}

function setFontSize(fontSize) {
    if (gIsTopLine) {
        gMeme.topLine.fontSize += fontSize;
    } else {
        gMeme.bottomLine.fontSize += fontSize;
    }
}

function setMemeTxt(txt) {
    if (gIsTopLine) {
        gMeme.topLine.text = txt;
    } else {
        gMeme.bottomLine.text = txt;
    }
}

function SetFillColor(color) {
    if (gIsTopLine) {
        gMeme.topLine.fillColor = color;
    } else {
        gMeme.bottomLine.fillColor = color;
    }
}

function SetStrokeColor(color) {
    if (gIsTopLine) {
        gMeme.topLine.strokeColor = color;
    } else {
        gMeme.bottomLine.strokeColor = color;
    }
}

function setTxtAlign(align) {
    var xPosMult;
    if (align === 'right') {
        xPosMult = 0.75
    } else if (align === 'center') {
        xPosMult = 0.5
    } else {
        xPosMult = 0.15
    }


    if (gIsTopLine) {
        gMeme.topLine.textAlign = xPosMult;
    } else {
        gMeme.bottomLine.textAlign = xPosMult;
    }
}

function setLine() {
    gIsTopLine = !gIsTopLine;
}

function saveMyMeme(data) {
    var myMeme = {
        id: gMyMemes.length + 1,
        imgData: data
    }
    gMyMemes.push(myMeme)
    saveToStorage(STORAGE_KEY, gMyMemes)

}

function loadMyMeme() {
    var myMemes = loadFromStorage(STORAGE_KEY)
    if (!myMemes) return [];
    return myMemes
}

function CreateMyMemeStrHTML(){
    var strHTML = ''
    gMyMemes.forEach(function (meme) {
        strHTML += `<img id=${meme.id} onclick="onImgClick(this)" src=${meme.imgData}>`
    })
    return strHTML;
}
'use strict'

var gCurrImg;

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

var gMeme = {
    imgId: null,
    topLine: {
        text: '',
        fontSize:'',
        fillColor: '',
        strokeColor: ''
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

function setCurrMeme(txt, tSize = '30px Impact', fColor = 'red', sColor = 'white') {
    gMeme.imgId = gCurrImg.id;
    gMeme.topLine.text = txt;
    gMeme.topLine.fontSize = tSize;
    gMeme.topLine.fillColor = fColor;
    gMeme.topLine.strokeColor = sColor;
    console.log(gMeme)
}


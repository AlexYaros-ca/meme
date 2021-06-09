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

function setCurrImg(id) {
    var currImg = null;
    IMAGES.forEach(function (img) {       
        if (img.id === id) {
            currImg = img
            return;
        }
    })
    gCurrImg = currImg
}
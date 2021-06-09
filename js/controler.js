'use strict'

function onImgClick(el){        
    drawImgOnCanvas(el.src)
    setCurrImg(el.id)
    console.log(gCurrImg)
}
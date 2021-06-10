'use strict'

function renderGallery(){
    var elGallery = document.querySelector('.gallery')
    elGallery.innerHTML = createImagesStrHTML()
}


function onImgClick(el) {
    setCurrImg(el.id)

}
function onTextInput(txt){
    setMemeTxt(txt)
    renderCanvas()
}

function onSetFontSize(fontSize){
    setFontSize(fontSize)
    renderCanvas()
}

function onSetFillColor(color){
    SetFillColor(color)
    renderCanvas()
}
function onSetStrokeColor(color){
    SetStrokeColor(color)
    renderCanvas()
}

function onSetLine(){
    setLine()    
}

function onSetTxtAline(aline){
    setTxtAline(aline)
    renderCanvas()
}
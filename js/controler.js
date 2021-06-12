'use strict'

function renderGallery(){
    var elGallery = document.querySelector('.gallery')
    elGallery.innerHTML = createImagesStrHTML()
}

function onImgClick(el) {
    var elDarkScreen = document.querySelector('.dark-screen')
    var elEditor = document.querySelector('.meme-editor')
    elEditor.classList.toggle('hidden')
    elDarkScreen.classList.toggle('hidden')
    setCurrImg(el.id)
}

function onTextInput(txt){
    if(!gIsGallery) return
    setMemeTxt(txt)
    renderCanvas()
}

function onSetFontSize(fontSize){
    if(!gIsGallery) return    
    setFontSize(fontSize)
    renderCanvas()
}

function onSetFillColor(color){
    if(!gIsGallery) return
    SetFillColor(color)
    renderCanvas()
}
function onSetStrokeColor(color){
    if(!gIsGallery) return
    SetStrokeColor(color)
    renderCanvas()
}

function onSetLine(){
    if(!gIsGallery) return
    setLine()    
}

function onSetTxtAlign(align){
    if(!gIsGallery) return
    setTxtAlign(align)
    renderCanvas()
}

function onCloseEditor(){
    var elDarkScreen = document.querySelector('.dark-screen')
    var elEditor = document.querySelector('.meme-editor')
    elEditor.classList.toggle('hidden')
    elDarkScreen.classList.toggle('hidden')
}
function onSave(){
    var imgData = saveCanvas();
    saveMyMeme(imgData)
}

function onDisplayMyMeme(){
    var elGallery = document.querySelector('.gallery')    
    elGallery.innerHTML = CreateMyMemeStrHTML();
    gIsGallery = false;
}
function onDisplayGallery(){
    renderGallery()
    gIsGallery = true;
}
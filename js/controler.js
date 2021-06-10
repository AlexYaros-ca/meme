'use strict'


function onImgClick(el) {
    setCurrImg(el.id)

}
function onTextInput(txt){
    setCurrMeme(txt)
    renderCanvas()
}

// function renderCanvas(){
//     debugger
//     resizeCanvas()
//     drawImgOnCanvas(gCurrImg.src)
//     printText(gMeme.topLine.text)
//     console.log(gMeme.topLine.text)
// }
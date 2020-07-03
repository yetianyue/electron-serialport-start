// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.
const { ipcRenderer } = require('electron')

ipcRenderer.on('marh-data', (event, arg) => {
    inputs = document.getElementsByClassName('marData')
    let isSet = false
    for(let i = 0 ; i < inputs.length ; i++){
        if ( inputs[i].value == '' || inputs[i].value == 0){
            isSet = true
            inputs[i].value = arg
            return
        }
    }
    console.log(isSet)
  })

document.getElementById('clearBtn').addEventListener('click',function(e){
    console.log(e)
    inputs = document.getElementsByClassName('marData')
    for(let i = 0 ; i < inputs.length ; i++){
        inputs[i].value = 0
    }
})
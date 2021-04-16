var textInput = document.querySelector("#input-textarea")
var btnTranslate = document.querySelector("#btn-translate")
var textOutput = document.querySelector("#output-textarea")

var serverUrl = "https://api.funtranslations.com/translate/numbers.json"

function getTranslationURL(text) {
    return serverUrl + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured ", error);

};

function clickHandler() {
    
    var inputTxt = textInput.value;

    fetch(getTranslationURL(inputTxt))
    .then(response => response.json())
    .then(output=>{
        var translatedText = output.contents.translated;
        textOutput.innerHTML = translatedText})
}

btnTranslate.addEventListener("click", clickHandler)
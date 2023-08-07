
var inputText = document.querySelector("#input-text");
var translateButton = document.querySelector("#translate-button");
var outputDiv = document.querySelector("#output");


var serverUrl= "https://api.funtranslations.com/translate/minion.json"


function getTranslatedURL(text){
  return serverUrl + "?" +"text=" + text;
}


function errorHandler(error){
  console.log("error occurred"+ error);
  alert("server error, Please try after some time");
}

function clickEventHandler() {
  var text = inputText.value;

  fetch(getTranslatedURL(text))
  .then(response => response.json())
  .then(json =>{
    var translatedText=json.contents.translated;
    outputDiv.innerText = translatedText;
  })

  .catch(errorHandler);

}


translateButton.addEventListener("click", clickEventHandler);



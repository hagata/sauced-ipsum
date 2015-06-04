/*Copy-action*/

var triggerConfirm = document.getElementById('copy-ipsum');
var copyConfirm = document.getElementById('copyConfirmation');
var confirmText = document.getElementById('output-ipsum');

triggerConfirm.addEventListener("click", function() {
  copyConfirm.classList.toggle("on");
  confirmText.classList.toggle("on");
 
  
  setTimeout(function() {
    copyConfirm.classList.toggle("on");
		text.classList.toggle("on");
  }, 1000)
})
var saucy = [
  "Sauced",
  "bbq",
  "ribs",
  "bacon",
  "baked beans",
  "brisket",
  "pulled pork",
  "smoked",
  "chicken",
  "wings",
  "dipped in",
  "honey",
  "ranch",
  "pepper",
  "southern",
  "authentic",
  "spirits",
  "whiskey",
  "jumbo",
  "lightly tossed",
  "your choice of",
  "blue cheese",
  "bumpkins",
  "tater tots",
  "egg rolls",
  "loaded with",
  "melted",
  "jam",
  "sour cream",
  "chopped",
  "cheezy",
  "fritters",
  "cornbread",
  "hushpuppies",
  "jalapeno",
  "chives",
  "house-made",
  "stuffed",
  "rednexican nachos",
  "black beans",

];
function collapseIntro(){
	var introArea = document.getElementById('intro')
  if (intro.classList.contains("collapse")) {

  }else{
    intro.classList.toggle("collapse");
  }
}


function turnOnCopyButton(){
	var copyButton =  document.getElementById('copy-ipsum')
	if (copyButton.classList.contains("on")) {

	}else{
		copyButton.classList.toggle("on");
	}
}

function turnOnDevArea(){
	var devArea =  document.getElementById('dev-area')
	if (devArea.classList.contains("on")) {

	}else{
		devArea.classList.toggle("on");
	}
}
  ZeroClipboard.config( { swfPath: "node_modules/zeroclipboard/dist/ZeroClipboard.swf" } );

var client = new ZeroClipboard(document.getElementById('copy-ipsum'));



var generated = [];
//seperate into words and phrases, would be best to keep word count accurate

document.getElementById('generate-button').onclick = function() {
	generated = [];

  var genLength = document.getElementById('gen-length-value').value;
  var gentype = ""

  if (document.getElementById('words').checked) {
    gentype = "words"
  } 
  else if(document.getElementById('sentence').checked){
    gentype = "sentence"
  }
  else if (document.getElementById('paragraphs').checked) {
    gentype = "paragraphs"
  }

  generate(genLength, gentype)

  collapseIntro();
  turnOnCopyButton();
  turnOnDevArea()
}



/*
Generate
========
*/


function generate(length, type) {


  if (type == "words") {
    //Number of Words Generator function
    for (var i = 0; i < length; i++) {
      var randomNumber = Math.floor(Math.random() * saucy.length);

      generated.push(saucy[randomNumber]);
      //if the last word was the same as the current word, randomize again
      capitalizeFirst(generated);
    }
  } 

  else if(type == "sentence"){
    var sentence = generateSentence()
    generated.push(sentence + ".")
  }
  
  else if (type == "paragraphs") {
    var paragraphs = []
    var sentencesInParagraph = Math.floor(Math.random() * (5 - 2 + 1) + 2);

    for (var par = 0; par < length; par++) {
      var paragraph = []

      for (var i = 0; i < sentencesInParagraph; i++) {


        paragraph.push(generateSentence() + ".")

      };

      paragraphs.push(paragraph.join(" "));
      generated.push(paragraphs[par]);
    };	
    

  } else {
    console.log("no type")
  }

  printGenerated(type)
  //upgrade output to p tags?
  /* document.getElementById('output-ipsum').value = generated.join(" ");*/
}



function printGenerated(genType){
  var printToInnerElement = document.getElementById('output-ipsum')
  
  if (genType == "words"){
    if(generated.length < 5){
      printToInnerElement.innerHTML = "<h1 class='single'>" + generated.join(" ") + "</h1>"
    }else{
      printToInnerElement.innerHTML = "<p>" + generated.join(" ") + "</p>"
    }
  }else{
    printToInnerElement.innerHTML = "<p>" + generated.join("\r\n\r\n </p><p>") + "</p>";
  }
}



function generateSentence(){
  var sentence = [];
  var sentenceLength = Math.floor(Math.random() * (14 - 4 + 1) + 4);

  for (var i = 0; i < sentenceLength; i++) {
    var randomNumber = Math.floor(Math.random() * saucy.length);
    sentence.push(saucy[randomNumber]);
  };
  capitalizeFirst(sentence)
  return sentence.join(" ")
}

function capitalizeFirst(sourceArray){
  sourceArray[0] = sourceArray[0].charAt(0).toUpperCase() + sourceArray[0].substr(1);
}
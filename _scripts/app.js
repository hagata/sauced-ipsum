
var generated = [];
//seperate into words and phrases, would be best to keep word count accurate

document.getElementById('generate-button').onclick = function() {
	generated = [];
  
  var genLength = document.getElementById('gen-length-value').value;
  var gentype = ""

  if (document.getElementById('words').checked) {
    gentype = "words"
  } else if (document.getElementById('paragraphs').checked) {
    gentype = "paragraphs"
  }

  generate(genLength, gentype)
}

//generate
function generate(length, type) {
  

  if (type == "words") {
    //Number of Words Generator function
    for (var i = 0; i < length; i++) {
      var randomNumber = Math.floor(Math.random() * saucy.length);

      generated.push(saucy[randomNumber]);
      //if the last word was the same as the current word, randomize again

    }
  } 
  
  else if (type == "paragraphs") {
    var paragraphs = []
    var paragraphLengthRange = Math.floor(Math.random() * (24 - 18 + 1) + 18);

    for (var h = 0; h < length; h++) {
      if (length == null) {
        break;
      }

      for (var i = 0; i < paragraphLengthRange; i++) {

        // REFACTOR REFACTOR REFACTOR!!! 
        var randomNumber = Math.floor(Math.random() * saucy.length);
        paragraphs.push(saucy[randomNumber]);

      }
			
      
      generated.push(paragraphs.join(" "))
    }
    
   /* generated.push(paragraphs)*/
    console.log(paragraphs)
	
    
    //make a paragraph with a bunch of random words

    //for each length, push a paragraph
  } else {
    console.log("no type")
  }

  printGenerated(type)
  //upgrade output to p tags?
 /* document.getElementById('output-ipsum').value = generated.join(" ");*/
}



function printGenerated(genType){
  var printToElement = document.getElementById('output-ipsum')
  
	if (genType == "words"){
    printToElement.value = generated.join(" ")
  }else{
    printToElement.value = generated.join("\r\n\r\n")
  }
}
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
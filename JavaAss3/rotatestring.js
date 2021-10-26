function rotateRight(text, noOfChars = 0){
	const n = noOfChars % text.length;
	return rotate(text, text.length - n);
	document.getElementById("result").style.display = "block";
    let el = document.getElementById("result");
    el.textContent = `The rotated string is ${rotate}!`;
  }
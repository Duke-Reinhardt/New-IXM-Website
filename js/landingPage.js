
var slideIndex = 1;
var pos = 0;
var mainImage = document.getElementById("main");


var backgroundBank = [
"url('img/IXM-IXM.png')", //0
"url('img/IXM-epica.png')",	//1
"url('img/IXM-AOY.png')", //2
"url('img/IXM-thailand.png')" //3
];

setInterval(plusSlide,4000);

function changeBackground(n) {
	if(n > backgroundBank.length) {slideIndex = 0}
	if(n < 1) {slideIndex = backgroundBank.length}
	//setInterval(fadeIn,10);
	mainImage.style.backgroundImage = backgroundBank[n-1];
	pos = 0;
	//mainImage.style.opacity = 0.4;
	}

function plusSlide() {
	changeBackground(++slideIndex);
}

function fadeIn() {
	if (pos > 98){
		pos = 99;
	}
	 else {
	 	pos++;
	 }
 	mainImage.style.opacity = '0.'+ pos;
	document.getElementById("demo").innerHTML = pos;

	document.getElementById("demo2").innerHTML =  mainImage.style.opacity;
	}






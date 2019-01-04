var btnPlay    = document.getElementById("btn-play");
var btnParar   = document.getElementById("btn-parar");
var btnMarcar  = document.getElementById("btn-marcar");
var btnResetar = document.getElementById("btn-resetar");

btnPlay.addEventListener('click', function() {
	inicia();
});

btnParar.addEventListener('click', function() {
	parar();
});

btnMarcar.addEventListener('click', function() {
	marcar();
});

btnResetar.addEventListener('click', function() {
	resetar();
});

var intervalo;

function inicia() {
	var mili = 0
	var s = 1;
	var m = 0;
	var h = 0;

	intervalo = window.setInterval(function() {
	    if (mili == 100) { s++; mili = 0; }
		if (s == 60) { m++; s = 0; }
		if (m == 60) { h++; s = 0; m = 0; }
		if (mili < 10) document.getElementById("mili").innerHTML = "0" + mili; else document.getElementById("mili").innerHTML = mili;
		if (h < 10) document.getElementById("hora").innerHTML = "0" + h + ":"; else document.getElementById("hora").innerHTML = h + ":";
		if (s < 10) document.getElementById("seg").innerHTML = "0" + s + ":"; else document.getElementById("seg").innerHTML = s + ":";
		if (m < 10) document.getElementById("min").innerHTML = "0" + m + ":"; else document.getElementById("min").innerHTML = m + ":";

		mili++;
		title();
	}, 10);
}


function parar () {
	window.clearInterval(intervalo);
}

var count = 0;

function marcar () {

	count++;

	var miliAtual = document.getElementById("mili");
	var segAtual  = document.getElementById("seg");
	var minAtual  = document.getElementById("min");
	var horaAtual = document.getElementById("hora");

	var newMarcacao = document.getElementById("marcacoes");
	var newSpan = document.createElement("span");

	newSpan.textContent = count+"º      "+horaAtual.innerHTML+minAtual.innerHTML+segAtual.innerHTML+miliAtual.innerHTML;

	newMarcacao.appendChild(newSpan);
	newSpan.appendChild(document.createElement("br"));
	newSpan.appendChild(document.createElement("hr"));
}

function resetar () {
	window.clearInterval(intervalo);
	document.getElementById("hora").innerHTML = "00:";
	document.getElementById("min").innerHTML  = "00:";
	document.getElementById("seg").innerHTML  = "00:";
	document.getElementById("mili").innerHTML = "00";

	inicia();
}

function title () {
	var title = document.getElementById("title");

	var miliAtual = document.getElementById("mili");
	var segAtual  = document.getElementById("seg");
	var minAtual  = document.getElementById("min");
	var horaAtual = document.getElementById("hora");

	title.innerHTML = "Clock - "+horaAtual.innerHTML+minAtual.innerHTML+segAtual.innerHTML+miliAtual.innerHTML;
}


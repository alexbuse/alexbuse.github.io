document.getElementById("id_logic").innerHTML = "Logic version = 2019.11.22.0";
document.getElementById("id_start").addEventListener("click", start);
document.getElementById("id_stop").addEventListener("click", stop);
//se declara un timer global pentru a putea fi apelat de functii
var timer_id;
//se declara unghi ca structura pentru a putea fi transmis ca referinta functiei
var unghi = {};
unghi.valoare = 0;
var muncitor=null;

function desenare(context, canvas, raza_mica, raza_mare, unghi)
{
		//desenam un cerc la pozitia data de unghi
		//calculam x si y ca centru al cercului mic aflat pe cercul mare
		context.clearRect(0, 0, canvas.width, canvas.height);
		var x = canvas.width/2 + raza_mare * Math.cos(unghi.valoare * Math.PI / 180 );
		var y = canvas.height/2 + raza_mare * Math.sin(unghi.valoare * Math.PI / 180 );
		//incepem sa desenam
		context.beginPath();
		context.arc(x, y, raza_mica, 0, 2 * Math.PI); //coordonatele centrului cercului mic,
													  //raza si unchiul pornire si oprire
		context.stroke();
		
		unghi.valoare++;
		if(unghi.valoare == 360) unghi.valoare = 0;

}



function start()
{
	document.getElementById("id_start").disabled = true;
	document.getElementById("id_stop").disabled = false;
	var canvas = document.getElementById("id_canvas");
	var context = canvas.getContext("2d");

	if (muncitor==null)
	{
		muncitor = new Worker("calcul_prime.js");
		muncitor.onmessage = function(e)
		{
			document.getElementById("id_prime").innerHTML = e.data;
		}
		muncitor.postMessage("Start");
	}
	else
		muncitor.postMessage("Start");
	
	var raza_mare = 100;
	var raza_mica = 10;
	
	timer_id = setInterval(desenare, 20, context, canvas, raza_mica, raza_mare, unghi);
	desenare(context, canvas, raza_mica, raza_mare, unghi);
		
}
	
function stop()
{
	clearInterval(timer_id);
	
	document.getElementById("id_start").disabled = false;
	document.getElementById("id_stop").disabled = true;
	
	
	muncitor.postMessage("Stop");
}

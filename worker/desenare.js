document.getElementById("id_logic").innerHTML = "Logic version = 2019.11.1.0";
document.getElementById("id_start").addEventListener("click", start);
document.getElementById("id_stop").addEventListener("click", stop);

function start()
{
	document.getElementById("id_start").disabled = true;
	document.getElementById("id_stop").disabled = false;
	var canvas = document.getElementById("id_canvas");
	var context = canvas.getContext("2d");
	var unghi = 0;
	var raza_mare = 100;
	var raza_mica = 10;
	
	
	while (1)
	{
		//desenam un cerc la pozitia data de unghi
		//calculam x si y ca centru al cercului mic aflat pe cercul mare
		context.clearRect(0, 0, canvas.width, canvas.height);
		var x = canvas.width + raza_mare * Math.cos(unghi * Math.PI / 180 );
		var y = canvas.height + raza_mare * Math.sin(unghi * Math.PI / 180 );
		//incepem sa desenam
		context.beginPath();
		context.arc(x, y, raza_mica, 0, 2 * Math.PI); //coordonatele centrului cercului mic, raza si unchiul pornire si oprire
		
		context.stroke();
		
		unghi++;
		if(unghi == 360) unghi = 0;
	}
}
	
function stop()
{
	document.getElementById("id_start").disabled = false;
	document.getElementById("id_stop").disabled = true;
}

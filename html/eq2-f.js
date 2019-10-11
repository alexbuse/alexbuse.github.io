document.getElementById("id_logic_version").innerHTML = "Logic version = 2019.10.11.0";

document.getElementById("id_solve").addEventListener("click", solve);

function read_coefficients()
{
	var a = document.getElementById("id_a").value;
	var b = document.getElementById("id_b").value;
	var c = document.getElementById("id_c").value;
	var coef = {};
	coef.a = a;
	coef.b = b;
	coef.c = c;
	return coef;
}

function compute_solutions()
{
	var delta = b*b -4*a*c;
	var x1_re, x1_im, x2_re, x2_im; //pentru a nu deveni variabile globale, trebuie declarate cu var
	
	if (delta>=0){
		x1_re = (-b - Math.sqrt(delta)) / (2*a);
		x2_re = (-b - Math.sqrt(delta)) / (2*a);
		x1_im = 0;
		x2_im = 0;
	}
	else {
		x1_re = -b / (2 * a);
		x2_re = -b / (2 * a);
		x1_im = (- Math.sqrt(-delta)) / (2*a);
		x2_im = (+ Math.sqrt(-delta)) / (2*a);
	}
	var solutions  = {};
	solutions.x1_re = x1_re;
	solutions.x2_re = x2_re;
	solutions.x1_im = x1_im;
	solutions.x2_im = x2_im;
	
	return solutions;
}

function print_solutions()
{
	document.getElementById("id_x1").innerHTML = solutions.x1_re + "+" + solutions.x1_im + "i";
	document.getElementById("id_x2").innerHTML = solutions.x2_re + "+" + solutions.x2_im + "i";
}

function solve()
{
	var coef = read_coefficients();
	var solutions = compute_solutions(coef);
	print_solutions(solutions);
}

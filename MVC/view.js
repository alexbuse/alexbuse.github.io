class t_eq2_view{
	constructor(){
		document.getElementById("id_solve").addEventListener("click", this.on_button_pressed.bind(this));
	}
	
	set_events(events)
	{
		//setam lista de functii
		this.events_list = events;
	}
	
	on_button_pressed()
	{
		//controller.on_solve;
		//lista functii apeleaza functia dorita
		this.events_list.call_event("on_solve_clicked");
	}
	
	get_a()
	{
		return document.getElementById("id_a").value;
	}
	
	get_b()
	{
		return document.getElementById("id_b").value;
	}

	get_c()
	{
		return document.getElementById("id_c").value;
	}

	set_solutions(x1_re,x1_im,x2_re,x2_im)
	{
		document.getElementById("id_x1").innerHTML = x1_re + "+" + x1_im + "i";
		document.getElementById("id_x2").innerHTML = x2_re + "+" + x2_im + "i";
	}
	
}

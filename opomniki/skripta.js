window.addEventListener('load', function() {
	//stran nalozena
	
	
	var izvediPrijavo = function(event) {
		
		var uporabnik = document.querySelector("#uporabnisko_ime").value;
		document.querySelector("#uporabnik").innerHTML = uporabnik;
		document.querySelector(".pokrivalo").style.visibility = "hidden";
	};
	
	var novOpomnik = function(event) {
		
		var nazivZadolzitve = document.querySelector("#naziv_opomnika").value;
		var cas = document.querySelector("#cas_opomnika").value;
		
		document.querySelector("#naziv_opomnika").value = '';
		document.querySelector("#cas_opomnika").value = '';
		
		document.querySelector("#opomniki").innerHTML += "<div class='opomnik senca rob'><div class='naziv_opomnika'>" + nazivZadolzitve + "</div><div class='cas_opomnika'>Opomnik čez <span>" + cas + "</span> sekund.</div></div>";
	};
	
	
	document.querySelector("#prijavniGumb").addEventListener('click', izvediPrijavo);
	document.querySelector("#dodajGumb").addEventListener('click', novOpomnik);
	
	
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (var i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
			if (cas == 0) {
				var naziv_opomnika = opomnik.querySelector(".naziv_opomnika").innerHTML;
				document.querySelector("#opomniki").removeChild(opomnik);
				alert("Opomnik!\n\nZadolžitev '" + naziv_opomnika + "' je potekla!");
			} else {
				casovnik.innerHTML = cas - 1;
			}
		}
	};
	setInterval(posodobiOpomnike, 1000);
	
});
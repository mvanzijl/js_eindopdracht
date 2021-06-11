//      javascript       //

//functie laat menu zien of haal deze weg
let toggleNav = function () {
	let getSidebar = document.querySelector(".nav-sidebar");
	let getSidebarUl = document.querySelector(".nav-sidebar ul");
	let getSidebarSpan = document.querySelectorAll(".nav-sidebar Span");

	// laat menu zien
	if (toggleNavStatus === false) {
		getSidebar.style.width = "272px";
		getSidebarUl.style.visibility = "visible";

		// geeft de titels ook wat smoother weer;
		let arrayLength = getSidebarSpan.length;
		for (let i=0; i < arrayLength ; i++) {
			getSidebarSpan[i].style.opacity = "1";
		}

		toggleNavStatus = true;
	}

	// haalt menu weer weg
	else if (toggleNavStatus === true) {
		getSidebar.style.width = "0";
		getSidebarUl.style.visibility = "hidden";

		// geeft de titels ook wat smoother weer;
		let arrayLength = getSidebarSpan.length;
		for (let i=0; i < arrayLength ; i++) {
			getSidebarSpan[i].style.opacity = "0";
		}

		toggleNavStatus = false;
	}
}

// functie om achtergrondkleur te veranderen
let changeBackground = function(color) {
	document.getElementById("site").style.backgroundColor = color;
	colorView = color.charAt(0).toUpperCase() + color.slice(1);	// heeft hoofdletter aan kleurnaam op het scherm
	document.querySelector(".colorText").innerHTML = colorView;
	toggleNav();				// laat menu zien of haal deze weg
	checkRadio(color);		// zet de juiste kleur aan bij de radiobuttons
}

// functie om met toetsen de kleur te veranderen
let keyCode = function(event) {
	let x = event.keyCode;
	toggleNavStatus = true;
	if (x == 49) {
		changeBackground('grey');
	} else if (x == 50) {
		changeBackground('red');
	} else if (x == 51) {
		changeBackground('orange');
	} else if (x == 52) {
		changeBackground('purple');
	} else if (x == 53) {
		changeBackground('green');
	}
}

// functie reageerd op radiobuttons
let changeRadio = function(color) {
	toggleNavStatus = true;		// zet menu uit
	checkRadio(color);			// zet de juiste kleur aan bij de radiobuttons
	changeBackground(color);	// achtergrondkleur veranderen
}

// functie zet de juiste kleur aan bij de radiobuttons
let checkRadio = function(color) {
	let radioButton = document.querySelectorAll(".radio");
	let arrayLength = radioButton.length;
	for (let i=0; i < arrayLength ; i++) {
		radioButton[i].checked = false;
	}
	
	// als er een kleur is ingevult selecteer juiste radiobutton
	if (color) {
		document.getElementById(color + "Radio").checked = true;
	}
}


// basis instellingen:

// zet menu is uit bij opstarten
let toggleNavStatus = false;

// zet alle radiobuttons uit bij herladen van de pagina
checkRadio();
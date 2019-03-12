function clock() {// We create a new Date object and assign it to a variable called "time".
  var time = new Date(),
    
  // Access the "getHours" method on the Date object with the dot accessor.
  hours = time.getHours(),
  
  // Access the "getMinutes" method with the dot accessor.
  minutes = time.getMinutes(),
  
  seconds = time.getSeconds();

  document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

  function harold(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn
    }
    return standIn;
  }

  // 
  document.getElementById('data').innerHTML = time.getFullYear();
}

//
function changeBackground () {
	var hours = new Date().getHours();

	if (hours >= 6 && hours <= 12) {
    document.body.className = "dusk"; //dusk.jpg
		document.getElementById("tekst").innerHTML = "Goedemorgen! Tijd om op te staan."; //text onder de klok 
	}

	else if (hours >= 13 && hours <= 17) { 
    document.body.className = "day"; //day.jpg
		document.getElementById("tekst").innerHTML = "Fijne middag! Ga wat leuks doen.";
  }

  else if (hours >= 18 && hours <= 24) { 
		document.body.className = "sunset"; //sunset.jpg
		document.getElementById("tekst").innerHTML = "Het is al bijna tijd om naar bed te gaan..";
  }

  else if (hours >= 0 && hours <= 5) { 
		document.body.className = "night"; //night.jpg
		document.getElementById("tekst").innerHTML = "Tijd om te slapen.";
  }

function changeCircle () {
  var hours = new Date().getHours();
  
  if (hours >= 6 && hours <= 12) {
    document.getElementById("circle").style.display = "inline"; 
    document.getElementById("circle2").style.display = "none";
    document.getElementById("circle3").style.display = "none";
    document.getElementById("circle4").style.display = "none";
  }
  
  else if (hours >= 13 && hours <= 17) { 
    document.getElementById("circle").style.display = "none"; 
    document.getElementById("circle2").style.display = "inline";
    document.getElementById("circle3").style.display = "none";
    document.getElementById("circle4").style.display = "none";
  }
  
  else if (hours >= 18 && hours <= 24) { 
    document.getElementById("circle").style.display = "none"; 
    document.getElementById("circle2").style.display = "none";
    document.getElementById("circle3").style.display = "inline";
    document.getElementById("circle4").style.display = "none";
  }
  
  else if (hours >= 0 && hours <= 5) { 
    document.getElementById("circle").style.display = "none"; 
    document.getElementById("circle2").style.display = "none";
    document.getElementById("circle3").style.display = "none";
    document.getElementById("circle4").style.display = "inline";
  }
  
}

// iit 
setInterval(clock, 1000);

  changeBackground();
  changeCircle();
}


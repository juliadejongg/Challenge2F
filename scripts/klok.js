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
  var tlm = new TimelineMax();

	if (hours >= 6 && hours <= 12) {
    document.body.className = "dusk"; //dusk.jpg
    document.getElementById("tekst").innerHTML = "Goedemorgen! Tijd om op te staan."; //text onder de klok 
    tlm.set("#circle", {visibility: "hidden"});
    tlm.set("#circle2", {visibility: "visible"});
    tlm.set("#circle3", {visibility: "hidden"});
    tlm.set("#circle4", {visibility: "hidden"});
	}

	else if (hours >= 13 && hours <= 17) { 
    document.body.className = "day"; //day.jpg
    document.getElementById("tekst").innerHTML = "Fijne middag! Ga wat leuks doen.";
    tlm.set("#circle", {visibility: "visible"});
    tlm.set("#circle2", {visibility: "hidden"});
    tlm.set("#circle3", {visibility: "hidden"});
    tlm.set("#circle4", {visibility: "hidden"});
  }

  else if (hours >= 18 && hours <= 24) { 
    document.body.className = "sunset"; //sunset.jpg
    document.getElementById("tekst").innerHTML = "Het is al bijna tijd om te gaan slapen..";
    tlm.set("#circle", {visibility: "hidden"});
    tlm.set("#circle2", {visibility: "hidden"});
    tlm.set("#circle3", {visibility: "visible"});
    tlm.set("#circle4", {visibility: "hidden"});
  }

  else if (hours >= 0 && hours <= 5) { 
		document.body.className = "night"; //night.jpg
    document.getElementById("tekst").innerHTML = "Tijd om te slapen.";
    tlm.set("#circle", {visibility: "hidden"});
    tlm.set("#circle2", {visibility: "hidden"});
    tlm.set("#circle3", {visibility: "hidden"});
    tlm.set("#circle4", {visibility: "visible"});
  }


}
// iit 
setInterval(clock, 1000);

  changeBackground();


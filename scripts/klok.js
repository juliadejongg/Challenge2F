function clock() {
  var time = new Date(),

  hours = time.getHours(),
  
  minutes = time.getMinutes(),
  
  seconds = time.getSeconds();

  document.querySelectorAll('.clock')[0].innerHTML = harold(hours) + ":" + harold(minutes) + ":" + harold(seconds);

  function harold(standIn) {
    if (standIn < 10) {
      standIn = '0' + standIn
    }
    return standIn;
  }

  //Het jaartal opvragen
  document.getElementById('data').innerHTML = time.getFullYear();
}

function changeBackground () {
  var hours = new Date().getHours();
  var tlm = new TimelineMax();

	if (hours >= 5 && hours < 12) {
    document.body.className = "dusk"; //dusk.jpg
    document.getElementById("tekst").innerHTML = "Goedemorgen! Tijd om op te staan."; //tekst onder de klok 
    tlm.set("#circle", {visibility: "hidden"}); 
    tlm.set("#circle2", {visibility: "visible"});
    tlm.set("#circle3", {visibility: "hidden"});
    tlm.set("#circle4", {visibility: "hidden"});
    tlm.add( TweenMax.from("#circle2", 10, { //Onder elkaar gezet omdat ik het zo overzichtelijker vind welke elementen ik heb. Verder zijn alle animaties bij elke tijd hetzelfde.
      y:500,
      opacity:0,  
      ease:Circ.easeOut,
      rotation:720,
    }));
    tlm.add( TweenMax.to("#circle2", 5, {
      y:60, 
      x:50,
      scale:1.5, 
      ease:Back.easeOut,
      rotation:180,
    }));
	}

	else if (hours >= 12 && hours < 17) { 
    document.body.className = "day"; //day.jpg
    document.getElementById("tekst").innerHTML = "Fijne middag! Ga wat leuks doen.";
    tlm.set("#circle", {visibility: "visible"});
    tlm.set("#circle2", {visibility: "hidden"});
    tlm.set("#circle3", {visibility: "hidden"});
    tlm.set("#circle4", {visibility: "hidden"});
    tlm.add( TweenMax.from("#circle", 10, { 
      y:500,
      opacity:0,  
      ease:Circ.easeOut,
      rotation:720,
    }));
    tlm.add( TweenMax.to("#circle", 5, {
      y:60, 
      x:50,
      scale:1.5, 
      ease:Back.easeOut,
      rotation:180,
    }));
  }

  else if (hours >= 17 && hours < 24) { 
    document.body.className = "sunset"; //sunset.jpg
    document.getElementById("tekst").innerHTML = "Het is bijna tijd om te gaan slapen..";
    tlm.set("#circle", {visibility: "hidden"});
    tlm.set("#circle2", {visibility: "hidden"});
    tlm.set("#circle3", {visibility: "visible"});
    tlm.set("#circle4", {visibility: "hidden"});
    tlm.add( TweenMax.from("#circle3", 10, { 
      y:500,
      opacity:0,  
      ease:Circ.easeOut,
      rotation:720,
    }));
    tlm.add( TweenMax.to("#circle3", 5, {
      y:60, 
      x:50,
      scale:1.5, 
      ease:Back.easeOut,
      rotation:180,
    }));
  }

  else if (hours >= 0 && hours < 5) { 
		document.body.className = "night"; //night.jpg
    document.getElementById("tekst").innerHTML = "Tijd om te slapen.";
    tlm.set("#circle", {visibility: "hidden"});
    tlm.set("#circle2", {visibility: "hidden"});
    tlm.set("#circle3", {visibility: "hidden"});
    tlm.set("#circle4", {visibility: "visible"});
    tlm.add( TweenMax.from("#circle4", 10, { 
      y:500,
      opacity:0,  
      ease:Circ.easeOut,
      rotation:720,
    }));
    tlm.add( TweenMax.to("#circle4", 5, {
      y:60, 
      x:50,
      scale:1.5, 
      ease:Back.easeOut,
      rotation:180,
    }));
  }
}
 
setInterval(clock, 1000);

  changeBackground();

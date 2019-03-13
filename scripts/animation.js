var circle = document.getElementById('circle');

var tl = new TimelineMax ();
    tl.add( TweenLite.from("#circle", 10, {y:500, opacity:0, scale: 1}) );

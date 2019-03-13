var circle = document.getElementById('circle');

var tl = new TimelineMax ({repeat:-1});
    tl.add( TweenLite.from("#circle", 5, {y:500, opacity:0, scale: 1}) );
    tl.add( TweenLite.to("#circle", 5, {x:250, ease: Elastic.easeInOut}) );
    tl.add( TweenLite.to("#circle", 5, {y: 500, x:250, opacity:0}) );

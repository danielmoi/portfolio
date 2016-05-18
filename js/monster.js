var $topLeft = $('#boxTopLeft').css('x');

var tlTop = new TimelineMax();
var $monster = $('#monster');

tlTop.to($monster, 2, {x: -250 });

var m1 = $('#monster-1');

var tlmove1 = new TimelineMax();
tlmove1.to(m1, 3, { rotation: 720, transformOrigin: '50% 50%', x: -250, ease:Power2.easeInOut });

var wheel1 = $('#wheel-1');
var wheel2 = $('#wheel-2');

  var tl = new TimelineMax();
  tl.add('begin');

  tl.to([wheel1, wheel2], 1, { rotation: 360, transformOrigin: '50% 50%', repeat: -1, ease: Linear.easeNone });

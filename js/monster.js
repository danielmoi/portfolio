// Select elements
var $m1 = $('#monster-1');
var $m2 = $('#monster-2');
var $m3 = $('#monster-3');
var $m4 = $('#monster-4');
var $m5 = $('#monster-5');

var wheel1 = $('#wheel-1');
var wheel2 = $('#wheel-2');
var wheel3 = $('#wheel-3');
var wheel4 = $('#wheel-4');
var wheel5 = $('#wheel-5');
var wheel6 = $('#wheel-6');

// Move monster 1
var tlmove1 = new TimelineMax({
  onComplete: function() {
    console.log('tlmove1 complete');
    tlWheelA.pause();
    tlmove2.play();
    tlWheelB.play();
  }
});
tlmove1.to($m1, 3, {
  x: -250,
  ease: Power0.easeNone
});

// Move monster 2
var tlmove2 = new TimelineMax({
  paused: true,
  onComplete: function() {
    console.log('tlmove2 complete');
    tlWheelB.pause();
  }
});
tlmove2.to($m2, 2, {
  y: 151,
  ease: Power0.easeNone
});
tlmove2.to($m2, 3, {
  x: 250,
  ease: Power0.easeNone
});



// Move first pair of wheels
var tlWheelA = new TimelineMax();
tlWheelA.to([wheel1, wheel2], 1, {
  rotation: -360,
  transformOrigin: '50% 50%',
  repeat: -1,
  ease: Linear.easeNone
});

var tlWheelB = new TimelineMax({ paused: true });
tlWheelB.to([wheel3, wheel4], 1, {
  rotation: 360,
  transformOrigin: '50% 50%',
  repeat: -1,
  ease: Linear.easeNone
});

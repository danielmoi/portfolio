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
var wheel7 = $('#wheel-7');
var wheel8 = $('#wheel-8');

var $mhat = $('#monster-hat-magic');

// Move monster 1
var tlMove1 = new TimelineMax({
  onComplete: function() {
    console.log('tlMove1 complete');
    tlWheelA.pause();
    tlMove2.play();
    tlWheelB.play();
  }
});
tlMove1.to($m1, 3, {
  x: -250,
  ease: Power0.easeNone
});

// Move monster 2
var tlMove2 = new TimelineMax({
  paused: true,
  onComplete: function() {
    console.log('tlMove2 complete');
    tlWheelB.pause();
    tlMove3.play();
    tlWheelC.play();
  }
});
tlMove2.to($m2, 2, {
  y: 151,
  ease: Power0.easeNone
});
tlMove2.to($m2, 3, {
  x: 250,
  ease: Power0.easeNone
});

// Move monster 3
var tlMove3 = new TimelineMax({
  paused: true,
  onComplete: function() {
    console.log('tlMove3 complete');
    tlWheelC.pause();
    tlMove4.play();
    tlWheelD.play();
  }
});
tlMove3.to($m3, 2, {
  y: 195,
  ease: Power0.easeNone
});
tlMove3.to($m3, 3, {
  x: -250,
  ease: Power0.easeNone
});

// Move monster 4
var tlMove4 = new TimelineMax({
  paused: true,
  onComplete: function() {
    console.log('tlMove4 complete');
    tlWheelD.pause();
    tlMoveHat.play();
  }
});
tlMove4.to($m4, 2, {
  y: 146,
  ease: Power0.easeNone
});
tlMove4.to($m4, 3, {
  x: 250,
  ease: Power0.easeNone
});

// Move monster hat
var tlMoveHat = new TimelineMax({
  paused: true,
  onComplete: function() {
    console.log('tlMoveHat complete');
  }
});
tlMoveHat.to($mhat, 2, {
  y: 35,
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

// Move second pair of wheels
var tlWheelB = new TimelineMax({ paused: true });
tlWheelB.to([wheel3, wheel4], 1, {
  rotation: 360,
  transformOrigin: '50% 50%',
  repeat: -1,
  ease: Linear.easeNone
});

// Move third pair of wheels
var tlWheelC = new TimelineMax({ paused: true });
tlWheelC.to([wheel5, wheel6], 1, {
  rotation: -360,
  transformOrigin: '50% 50%',
  repeat: -1,
  ease: Linear.easeNone
});

// Move fourth pair of wheels
var tlWheelD = new TimelineMax({ paused: true });
tlWheelD.to([wheel7, wheel8], 1, {
  rotation: 360,
  transformOrigin: '50% 50%',
  repeat: -1,
  ease: Linear.easeNone
});

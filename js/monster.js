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
var $bfly = $('#butterfly-1');

var $box1 = $('#box-1');
var $box2 = $('#box-2');
var $box3 = $('#box-3');
var $box4 = $('#box-4');

var $dial1 = $('#dial-1');
var $dial2 = $('#dial-2');
var $dial3 = $('#dial-3');

// Move monster 1
var tlM1Left = new TimelineMax({
  paused: true,
  onComplete: function() {
    console.log('tlM1Left complete');
    tlWheelA.pause();

    tlWheelB.restart();
    tlB1Bounce.restart();
    tlD1Move.restart();
  }
});
tlM1Left.to($m1, 3, {
  x: -250,
  ease: Power0.easeNone
});

var tlB1Bounce = new TimelineMax({
  paused: true,
  onComplete: function() {
    console.log('tlB1Bounce complete');
    tlM2Down.restart();
    tlM2Wobble.restart();
  }
});
tlB1Bounce.to($box1, 0.2, {
  y: -5,
  yoyo: true,
  repeat: 5,
  ease: Linear.easeNone
});

var tlD1Move = new TimelineMax({
  paused: true,
  onComplete: function() {
    console.log('tlD1Move complete');
  }
});
tlD1Move.fromTo($dial1, 0.2, {
  transformOrigin: '0% 100%',
  rotation: 0,
}, {
  transformOrigin: '0% 100%',
  rotation: -60,
  repeat: 5
});

/////////////////////////////////////////////////////////////////////////////
// Move monster 2

var tlM2Down = new TimelineMax({
  paused: true,
  onComplete: function() {
    console.log('tlM2Down complete');
    tlM2Wobble.pause();

    // tlM2Right.restart();
    tlM2Right.play(0);
  }
});
tlM2Down.to($m2, 2, {
  y: 151,
  ease: Power0.easeNone
});

var tlM2Right = new TimelineMax({
  paused: true,
  onComplete: function() {
    console.log('tlM2Right complete');
    tlWheelB.pause();
    tlM2Right.pause(0);
    tlM2Down.pause(0);


    tlB2Bounce.restart();
    tlD2Move.restart();
    tlWheelC.restart();
  }
});
tlM2Right
.to($m2, 0, {
  rotation: 0,
  transformOrigin: '50% 50%'
})
.to($m2, 3, {
  x: 250,
  ease: Power0.easeNone
});

var tlM2Wobble = new TimelineMax({
  paused: true
});
tlM2Wobble.fromTo($m2, 0.1, {
  rotation: 10,
  transformOrigin: '50% 50%'
}, {
  rotation: -10,
  transformOrigin: '50% 50%',
  yoyo: true,
  repeat: -1
});

var tlB2Bounce = new TimelineMax({
  paused: true,
  onComplete: function() {
    console.log('tlB2Bounce complete');
    tlM3Down.restart();
    tlM3Wobble.restart();
  }
});
tlB2Bounce.to($box2, 0.2, {
  y: -5,
  yoyo: true,
  repeat: 5,
  ease: Linear.easeNone
});

var tlD2Move = new TimelineMax({
  paused: true,
  onComplete: function() {
    console.log('tlD2Move complete');
  }
});
tlD2Move.fromTo($dial2, 0.2, {
  transformOrigin: '100% 100%',
  rotation: 0,
}, {
  transformOrigin: '100% 100%',
  rotation: 60,
  repeat: 5
});

/////////////////////////////////////////////////////////////////////////////
// Move monster 3

var tlM3Wobble = new TimelineMax({
  paused: true
});
tlM3Wobble.fromTo($m3, 0.1, {
  rotation: 10,
  transformOrigin: '50% 50%'
}, {
  rotation: -10,
  transformOrigin: '50% 50%',
  yoyo: true,
  repeat: -1
});

var tlM3Down = new TimelineMax({
  paused: true,
  onComplete: function() {
    console.log('tlM3Down complete');
    tlM3Wobble.pause();

    tlM3Left.restart();
  }
});
tlM3Down.to($m3, 2, {
  y: 195,
  ease: Power0.easeNone
});

var tlM3Left = new TimelineMax({
  paused: true,
  onComplete: function() {
    console.log('tlM3Left complete');
    tlWheelC.pause();
    tlM3Down.pause(0);
    tlM3Left.pause(0);

    tlWheelD.restart();
    tlB3Bounce.restart();
    tlD3Move.restart();
  }
});
tlM3Left.to($m3, 3, {
  x: -250,
  ease: Power0.easeNone
});

var tlB3Bounce = new TimelineMax({
  paused: true,
  onComplete: function() {
    console.log('tlB3Bounce complete');
    tlM4Down.restart();
    tlM4Wobble.restart();
  }
});
tlB3Bounce.to($box3, 0.2, {
  y: -5,
  yoyo: true,
  repeat: 5,
  ease: Linear.easeNone
});

var tlD3Move = new TimelineMax({
  paused: true,
  onComplete: function() {
    console.log('tlD3Move complete');
  }
});
tlD3Move.fromTo($dial3, 0.2, {
  transformOrigin: '0% 100%',
  rotation: 0,
}, {
  transformOrigin: '0% 100%',
  rotation: -60,
  repeat: 5
});
/////////////////////////////////////////////////////////////////////////////
// Move monster 4

var tlM4Wobble = new TimelineMax({
  paused: true
});
tlM4Wobble.fromTo($m4, 0.1, {
  rotation: 10,
  transformOrigin: '50% 50%'
}, {
  rotation: -10,
  transformOrigin: '50% 50%',
  yoyo: true,
  repeat: -1
});

var tlM4Down = new TimelineMax({
  paused: true,
  onComplete: function() {
    console.log('tlM4Down complete');
    tlM4Wobble.pause();

    tlM4Right.restart();
  }
});
tlM4Down.to($m4, 2, {
  y: 146,
  ease: Power0.easeNone
});

var tlM4Right = new TimelineMax({
  paused: true,
  onComplete: function() {
    console.log('tlM4Right complete');
    tlWheelD.pause();

    tlMoveHat.restart();
  }
});
tlM4Right
.to($m4, 3, {
  x: 250,
  ease: Power0.easeNone
})
.to($m4, 0, {
  rotation: 0,
  transformOrigin: '50% 50%'
});

// Move monster hat
var tlMoveHat = new TimelineMax({
  paused: true,
  onComplete: function() {
    console.log('tlMoveHat complete');
    $('.btn-zolt').prop('disabled', false);

    tlBfly.restart();
  }
});
tlMoveHat.to($mhat, 0.5, {
  y: 35,
  rotation: 720,
  transformOrigin: '50% 50%',
  ease: Power2.easeInOut
});

// Move first pair of wheels
var tlWheelA = new TimelineMax({
  paused: true
});
tlWheelA.to([wheel1, wheel2], 1, {
  rotation: -360,
  transformOrigin: '50% 50%',
  repeat: -1,
  ease: Linear.easeNone
});

// Move second pair of wheels
var tlWheelB = new TimelineMax({
  paused: true
});
tlWheelB.to([wheel3, wheel4], 1, {
  rotation: 360,
  transformOrigin: '50% 50%',
  repeat: -1,
  ease: Linear.easeNone
});

// Move third pair of wheels
var tlWheelC = new TimelineMax({
  paused: true
});
tlWheelC.to([wheel5, wheel6], 1, {
  rotation: -360,
  transformOrigin: '50% 50%',
  repeat: -1,
  ease: Linear.easeNone
});

// Move fourth pair of wheels
var tlWheelD = new TimelineMax({
  paused: true
});
tlWheelD.to([wheel7, wheel8], 1, {
  rotation: 360,
  transformOrigin: '50% 50%',
  repeat: -1,
  ease: Linear.easeNone
});

// Move butterfly
var tlBfly = new TimelineMax({
  paused: true,
  onComplete: function() {
    console.log('tlBfly complete');
  }
});
tlBfly.to($bfly, 1, {
  x: 202,
  y: 82,
  ease: Linear.easeNone
});

// Let's go!
$('.btn-zolt').on('vclick', function() {
  $(this).prop('disabled', true);
  tlM1Left.pause(0);
  tlM4Right.pause(0);
  tlBfly.pause(0);
  tlMoveHat.pause(0);
  tlM4Down.pause(0);
  tlM1Left.restart();
  tlWheelA.restart();
  tlBtnZolt.pause(0);
});

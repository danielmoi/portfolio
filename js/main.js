/////////////////////////////////////////////////////////////////////////////

// Typed

$(document).ready(function() {
  $('.main__tagline-1').typed(typedOptions1);
});

var typedOptions1 = {
  strings: ['Full-stack web developer and graphic designer.'],
  typeSpeed: 20,
  startDelay: 1000,
  showCursor: false,
  callback: function() {
    displayTagline2();
    console.log('hi');
  }
};

var typedOptions2 = {
  strings: ['Passionate about code, design, climbing, and the oxford comma.'],
  typeSpeed: 20,
  startDelay: 1000,
  showCursor: false,
  callback: function() {
    $('.btn-zolt').prop('disabled', false);
    tlMove0.restart();
  }
};
var displayTagline2 = function() {
  $('.main__tagline-2').typed(typedOptions2);
};


/////////////////////////////////////////////////////////////////////////////

// NAV BAR

var navOpen = false;

// Nav Event Handlers
$('.nav__list-item').on('vclick', function(e) {
  $('.nav__list-item').removeClass('nav__active');
  $(this).addClass('nav__active');
});

$('.nav__list-item').on('click', function(e) {
  // e.stopPropagation();
  if ($('.nav__list-item').css('display') === 'block') {
    $('.nav').hide();
    navOpen = false;
    $('.nav__toggle').text('+');
  }
});

$('.nav__toggle').on('vclick', function(e) {
  if (navOpen) {
    $('.nav').hide();
    $('.nav__toggle').text('+');
    navOpen = false;
    return;
  }
  $('.nav').show();
  navOpen = true;
  $('.nav__toggle').text('–');
  // $('.nav').toggle();
  // e.stopPropagation();
});

// $(document).on('vclick', function() {
//   $('.nav').hide();
// });

var $btnZolt = $('.btn-zolt');

var tlBtnZolt = new TimelineMax({
  repeat: 2,
  repeatDelay: 0.5
});


tlBtnZolt.to($btnZolt, 0.1, {y:"-30"});
tlBtnZolt.to($btnZolt, 0.1, {y:"0"});

var tlBtnZoltParent = new TimelineMax({
  paused: true,
  repeat: -1,
  repeatDelay: 5
});
tlBtnZoltParent.add(tlBtnZolt);


////////////////////////////////////////////////////////////////////////////

// HOME

var $butterfly = $('.butterfly-small');


var tlBflyRotate = new TimelineLite({
  // paused: true
});
// tlButterfly.to($butterfly, 3, { x: -100 });

tlBflyRotate.to($butterfly, 0.2, {
  rotation: 15,
  transformOrigin: '50% 50%',
  ease: Power0.easeIn,
  yoyo: true,
  repeat: -1
});

var tlMove0 = new TimelineLite({
  paused: true
});
tlMove0.to($butterfly, 5, {
  left: '50%',
  top: '-1px',
  onComplete: function() {
    tlBflyRotate.pause();
    tlBtnZoltParent.restart();
    console.log('tlMove0 complete');
  }
}, 1);

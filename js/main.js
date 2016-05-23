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
  repeat: 3,
  repeatDelay: 0.5
});


tlBtnZolt.to($btnZolt, 0.1, {y:"-30"});
tlBtnZolt.to($btnZolt, 0.1, {y:"0"});

var tlMagic = new TimelineMax({
  repeat: -1,
  repeatDelay: 5
});
tlMagic.add(tlBtnZolt);


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

var tlMove0 = new TimelineLite();
tlMove0.to($butterfly, 5, {
  left: '50%',
  top: '-1px',
  onComplete: function() {
    tlBflyRotate.pause();
    console.log('tlMove0 complete');
  }
}, 2);

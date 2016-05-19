/////////////////////////////////////////////////////////////////////////////

// NAV BAR

// Nav Event Handlers
$('.nav__list-item').on('vclick', function(e) {
  $('.nav__list-item').removeClass('nav__active');
  $(this).addClass('nav__active');
  var section = $($(this).children()[0]).attr('data-section');
  currentSection = section;
  // $('.main__container').fadeOut(200).delay(200);
  // $('#' + section).fadeIn(300);
});

$('.nav__toggle').on('vclick', function(e) {
  $('.nav').toggle();
});

$('.nav__list-item').on('vclick', function(e) {
  if ($('.nav__list-item').css('display') === 'block') {
    $('.nav').toggle();
  }
});
////////////////////////////////////////////////////////////////////////////

// HOME

var $butterfly = $('.butterfly-small');


var tlRotate = new TimelineLite({
  // paused: true
});
// tlButterfly.to($butterfly, 3, { x: -100 });

tlRotate.to($butterfly, 0.2, {
  rotation: 15,
  transformOrigin: '50% 50%',
  ease: Power0.easeIn,
  yoyo: true,
  repeat: -1
});
var magic = function() {
  console.log('hello');
  // $butterfly.remove();
};

var tlMove = new TimelineLite();
tlMove.to($butterfly, 5, {
  left: '50%',
  top: '-1px',
  onComplete: magic
}, 2);



$(document).on('click', function() {
  tlRotate.pause();
});

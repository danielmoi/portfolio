/////////////////////////////////////////////////////////////////////////////

// NAV BAR

// Nav Event Handlers
$('.nav__list-item').on('mouseup touchend', function(e) {
  console.log('nav__list-item clicked' );
  $('.nav__list-item').removeClass('nav__active');
  $(this).addClass('nav__active');

  // location.href=$(this).children().attr('href');
  // e.stopPropagation();
  // return true;
});

$('a').on('click', function(e) {
  console.log('a clicked');
  // e.stopImmediatePropagation();
  console.log('a clicked line 2');
  if ($('.nav__list-item').css('display') === 'block') {
    $('.nav').hide();
    return true;
  }
});

$('.nav__toggle').on('vclick', function(e) {
  $('.nav').toggle();
  console.log('nav toggle clicked');
});


// $('a[data-section]').on('vclick', function(e) {
//   e.stopPropagation();
//   console.log('a clicked');
//   $('.nav').hide();
// });
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

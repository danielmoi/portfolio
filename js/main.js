/////////////////////////////////////////////////////////////////////////////

// NAV BAR

// Nav Event Handlers
$('.nav__list-item').on('vclick', function(e) {
  $('.nav__list-item').removeClass('nav__active');
  $(this).addClass('nav__active');
  var section = $($(this).children()[0]).attr('data-section');
  currentSection = section;
  $('.main__container').fadeOut(200).delay(200);
  $('#' + section).fadeIn(300);
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

var src = 'img/butterfly.svg';
var $butterfly = $('<img>');
$butterfly.attr('src', src);
$butterfly.addClass('butterfly');

$('.butterflies__container').append($butterfly);

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
  $butterfly.remove();
};

var tlMove = new TimelineLite();
tlMove.to($butterfly, 5, {
  left: 800,
  top: 200,
  onComplete: magic
});



$(document).on('click', function() {
  tlButterfly.pause();
});

////////////////////////////////////////////////////////////////////////////

// DESIGN
var arrDesign = [{
  img: 'img/54_150202_zjoli.png'
}];

for (var i = 0; i < arrDesign.length; i++) {
  var $img = $('<img>');
  $img.attr('src', arrDesign[i].img);
  $('.design__container').append($img);

}

////////////////////////////////////////////////////////////////////////////

// PROJECT SECTION

// Counters
var currentSection = '';
var indexCurrentProject = 0;

// Project Data
var arrProjects = [{
  name: 'Musical Monsters',
  img: 'img/musical-monsters.png',
  desc: 'A fun and interactive app that allows you to experiment with music. See monsters dance to your choice of music, play the drums and piano, and more!',
  url: 'https://musical-monsters.herokuapp.com',
  tech: 'Rails, D3.js, Three.js, Greensock, Web Audio API'
}, {
  name: 'Sorter',
  img: 'img/sorter.jpg',
  desc: 'An app for sorting and storing your web bookmarks, with custom categories, favourites, and a reading list.',
  url: 'https://sorter-4000.herokuapp.com/',
  tech: 'Rails, Cloudinary, ChartJS'
}, {
  name: 'Nadine Claire Events',
  img: 'img/nadine-claire-events.jpg',
  desc: 'Website for Nadine Claire Events, a boutique event management company in Sydney.',
  url: 'http://nadineclaireevents.com/',
  tech: 'Wordpress, HTML5, CSS3'
}];



// Preload images
var preloadImages = function(arr) {
  var newimages = [];

  for (var i = 0; i < arr.length; i++) {
    newimages[i] = new Image();
    newimages[i].src = arr[i].img;
  }
};

preloadImages(arrProjects);



// Element Selectors
$title = $('.project__title');
$description = $('.project__description');
$img = $('.project__image');
$a = $('.project__url');
$tech = $('.project__tech');

// Populate project with data
var populateProject = function(index) {
  var objCurrentProject = arrProjects[index];
  $title.text(objCurrentProject.name);
  $description.text(objCurrentProject.desc);
  $img.attr('src', objCurrentProject.img);
  $a.attr('href', objCurrentProject.url);
  $tech.text(objCurrentProject.tech);
};


// Previous project
var projectNext = function() {
  indexCurrentProject += 1;
  if (indexCurrentProject === arrProjects.length) {
    indexCurrentProject = 0;
  }
  populateProject(indexCurrentProject);
};

// Next project
var projectPrevious = function() {
  indexCurrentProject -= 1;
  if (indexCurrentProject < 0) {
    indexCurrentProject = arrProjects.length - 1;
  }
  populateProject(indexCurrentProject);
};


// Click Right
$('.project__overlay--right').on('vclick', function() {
  projectNext();
});

// Click Left
$('.project__overlay--left').on('vclick', function() {
  projectPrevious();
});

// Swipe Right
$('.project__container').on('swiperight', function() {
  projectNext();
});

// Swipe Left
$('.project__container').on('swipeleft', function() {
  projectPrevious();
});

var $arrowRight = $('.arrow-right');
var $arrowLeft = $('.arrow-left');

// Mouse in
$('.project__container').on('mouseover', function() {
  $arrowRight.fadeIn();
  $arrowLeft.fadeIn();
});

// Mouse out
$('.project__container').on('mouseleave', function() {
  $arrowRight.fadeOut();
  $arrowLeft.fadeOut();
});

// Keyboard Events
$(document).on('keydown', function(e) {

  if (currentSection !== 'projects') {
    return;
  }
  // Right Arrow
  if (e.which === 39) {
    projectNext();
  }
  if (e.which === 37) {
    projectPrevious();
  }
});

/////////////////////////////////////////////////////////////////////////////

// NAV BAR

// Nav Event Handlers
$('.nav__list-item').on('vclick', function(e) {
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

// PROJECT SECTION

// Counters
var currentSection = '';
var indexCurrentProject = 0;

// Project Data
var arrProjects = [{
  name: 'Musical Monsters',
  img: 'img/musical-monsters.png',
  desc: 'A fun and interactive app that allows you to experiment with music. See monsters dance to your choice of music, play the drums and piano, and more!',
  url: 'https://musical-monsters.herokuapp.com'
}, {
  name: 'Sorter',
  img: 'img/sorter.jpg',
  desc: 'An app for sorting and storing your web bookmarks, with custom categories, favourites, and a reading list.',
  url: 'https://sorter-4000.herokuapp.com/'
}, {
  name: 'Nadine Claire Events',
  img: 'img/nadine-claire-events.jpg',
  desc: 'Website for Nadine Claire Events, a boutique event management company in Sydney.',
  url: 'http://nadineclaireevents.com/'
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

// Populate project with data
var populateProject = function(index) {
  var objCurrentProject = arrProjects[index];
  $title.text(objCurrentProject.name);
  $description.text(objCurrentProject.desc);
  $img.attr('src', objCurrentProject.img);
  $a.attr('href', objCurrentProject.url);
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

  // Right Arrow
  if (e.which === 39) {
    projectNext();
  }
  if (e.which === 37) {
    projectPrevious();
  }
});

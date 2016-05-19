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
  desc: 'An organisational app for sorting and storing your web bookmarks, with custom categories, favourites, and a reading list.',
  url: 'https://sorter-4000.herokuapp.com/',
  tech: 'Rails, Cloudinary, ChartJS'
},{
  name: 'BuddyUP',
  img: 'img/buddy-up.png',
  desc: 'A motivational app to support people achieving goals. Find a new friend to BuddyUP with and achieve your goals together.',
  url: 'https://buddy-up.herokuapp.com/',
  tech: 'Rails, Backbone, Stripe, Underscore, Cloudinary'
},{
  name: 'Catbus 3000',
  img: 'img/catbus.png',
  desc: 'A 2D game, reimagining the classic Pong / Breakout game. Inspired by the amazing Catbus from My Neighbor Totoro!',
  url: 'http://danielmoi.github.io/ga-01-breakout/src',
  tech: 'jQuery, Canvas'
},{
  name: 'Tic Tac Toe',
  img: 'img/tic-tac-toe.png',
  desc: 'The classic noughts and crosses game. Play against a friend or challenge the computer (with 3 levels of AI).',
  url: 'http://danielmoi.github.io/ga-01-tic-tac-toe/src/',
  tech: 'jQuery'
},{
  name: 'Cafe App',
  img: 'img/cafe-app.png',
  desc: 'An app to help you locate the nearest cafes for any location in the world! View each cafe\'s rating and image from FourSquare.',
  url: 'http://danielmoi.github.io/ga-01-breakout/src',
  tech: 'Knockout, Google Maps, FourSquare API, jQuery'
}, {
  name: 'Nadine Claire Events',
  img: 'img/nadine-claire-events.jpg',
  desc: 'Business website for Nadine Claire Events, a boutique event management company in Sydney, as part of a project encompassing brand identity, style guide, and logo design.',
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
  $img.fadeOut(100, function() {
    $img.attr('src', objCurrentProject.img);
      $img.fadeIn(100);
  });
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

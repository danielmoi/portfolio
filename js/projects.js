// PROJECT SECTION

// Counters
var currentSection = '';
var indexCurrentProject = 0;
var currentProject = 0;

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

var arrImagesProjects = [];

for (var i = 0; i < arrProjects.length; i++) {
  var $divProject = $('<div>');
  $divProject.addClass('project__image-container');
  $divProject.attr('data-project-index', i);
  var $divInfo = $('<div>').addClass('project__image-info');
  $divInfo.text(arrProjects[i].name);
  $divProject.append($divInfo);
  var $imgProject = $('<img>');
  $imgProject.addClass('project__image');
  $imgProject.attr('src', arrProjects[i].img);
  arrImagesProjects.push($imgProject);
  $divProject.append($imgProject);
  $('.project__gallery').append($divProject);

}


// Element Selectors
// $title = $('.project__title');
// $description = $('.project__description');
// $img = $('.project__image');
// $a = $('.project__url');
// $tech = $('.project__tech');

// Populate project with data
// var populateProject = function(index) {
//   var objCurrentProject = arrProjects[index];
//   $title.text(objCurrentProject.name);
//   $description.text(objCurrentProject.desc);
//   $img.fadeOut(100, function() {
//     $img.attr('src', objCurrentProject.img);
//       $img.fadeIn(100);
//   });
//   $a.attr('href', objCurrentProject.url);
//   $tech.text(objCurrentProject.tech);
// };

$modalTitle = $('.modal__title');
$modalDesc = $('.modal__description');
$modalImg = $('.modal__image');
$modalTools = $('.modal__tools');
$modalLink = $('.modal__link');
$modalURL = $('.modal_url');

var populateModal = function(index) {
  var objCurrentProject = arrProjects[index];
  $modalTitle.text(objCurrentProject.name);
  $modalDesc.text(objCurrentProject.desc);
  $modalImg.attr('src', objCurrentProject.img);
  $modalTools.text('Tools: ' + objCurrentProject.tech);
  // $modalLink.attr('href', objCurrentProject.url);
  $modalLink.text('Check it out here');

};


// Previous project
var projectNext = function() {
  currentProject += 1;
  if (currentProject === arrProjects.length) {
    currentProject = 0;
  }
  populateModal(currentProject);
};

// Next project
var projectPrevious = function() {
  currentProject -= 1;
  if (currentProject < 0) {
    currentProject = arrProjects.length - 1;
  }
  populateModal(currentProject);
};

// Click modal
$('.project__image-container').on('click', function() {
  $('.overlay').show();
  $('.modal__container').show();
  var index = parseInt($(this).attr('data-project-index'));
  populateModal(index);
  currentProject = index;
});

// Click overlay
$('.overlay').on('click', function() {
  $('.overlay').fadeOut(100);
  $('.modal__container').hide();
});

// Click Right
$('.modal__overlay--right').on('vclick', function() {
  projectNext();
});

// Click Left
$('.modal__overlay--left').on('vclick', function() {
  projectPrevious();
});

// Swipe Right
$('.modal__image').on('swiperight', function() {
  projectNext();
});

// Swipe Left
$('.modal__image').on('swipeleft', function() {
  projectPrevious();
});

var $arrowRight = $('.arrow-right');
var $arrowLeft = $('.arrow-left');

// Mouse in
$('.project__image-container').on('mouseover', function() {
  $(this).children().fadeIn(100);
});

$('.modal__image-container').on('mouseover', function() {
  $arrowRight.fadeIn();
  $arrowLeft.fadeIn();
});

// Mouse out
$('.project__image-container').on('mouseleave', function() {
  $(this).find('.project__image-info').fadeOut(100);
});
$('.modal__image-container').on('mouseleave', function() {
  $arrowRight.fadeOut();
  $arrowLeft.fadeOut();
});

// Keyboard Events
$(document).on('keydown', function(e) {

  // Esc key
  if (e.which === 27) {
    $('.overlay').fadeOut(100);
    $('.modal__container').hide();
  }

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

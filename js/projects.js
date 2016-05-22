// PROJECT SECTION

// Counters
var currentSection = '';
var currentProject = 0;
var currentDesign = 0;

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
  img: 'img/buddy-up.jpg',
  desc: 'A motivational app to support people achieving goals. Find a new friend to BuddyUP with and achieve your goals together.',
  url: 'https://buddy-up.herokuapp.com/',
  tech: 'Rails, Backbone, Stripe, Underscore, Cloudinary'
},{
  name: 'Catbus 3000',
  img: 'img/catbus.jpg',
  desc: 'A 2D game, reimagining the classic Pong / Breakout game. Inspired by the amazing Catbus from My Neighbor Totoro!',
  url: 'http://danielmoi.github.io/ga-01-breakout/src',
  tech: 'jQuery, Canvas'
},{
  name: 'Tic Tac Toe',
  img: 'img/tic-tac-toe.jpg',
  desc: 'The classic noughts and crosses game. Play against a friend or challenge the computer (with 3 levels of AI).',
  url: 'http://danielmoi.github.io/ga-01-tic-tac-toe/src/',
  tech: 'jQuery'
},{
  name: 'Cafe App',
  img: 'img/cafe-app.jpg',
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
  $divProject.hide();
  $('.project__gallery').append($divProject);

}




var $modalTitle = $('.modal__title');
var $modalDesc = $('.modal__description');
var $modalImg = $('.modal__image');
var $modalTools = $('.modal__tools');
var $modalLink = $('.modal__link');
var $modalURL = $('.modal_url');

var $arrowRight = $('.arrow-right');
var $arrowLeft = $('.arrow-left');

var populateModalProject = function(index) {
  var objCurrentProject = arrProjects[index];
  $modalTitle.text(objCurrentProject.name);
  $modalDesc.text(objCurrentProject.desc);
  $modalImg.attr('src', objCurrentProject.img);
  $modalTools.text('Tools: ' + objCurrentProject.tech);
  $modalLink.attr('href', objCurrentProject.url);
  $modalLink.text('Check it out here');

};


// Previous project
var projectNext = function() {
  currentProject += 1;
  if (currentProject === arrProjects.length) {
    currentProject = 0;
  }
  populateModalProject(currentProject);
};

// Next project
var projectPrevious = function() {
  currentProject -= 1;
  if (currentProject < 0) {
    currentProject = arrProjects.length - 1;
  }
  populateModalProject(currentProject);
};

var modalClose = function() {
  $('.overlay').fadeOut(100);
  $('.modal__container').hide();
  currentSection = '';
};

/////////////////////////////////////////////////////////////////////////////

// MODAL and OVERLAY

// Click overlay
$('.overlay').on('vclick', function() {
  modalClose();
});

// Click close
$('.modal__close').on('vclick', function() {
  modalClose();
});
// Click Right
$('.modal__overlay--right').on('vclick', function() {
  if (currentSection === 'projects') {
    projectNext();
  }
  else if (currentSection === 'design') {
    designNext();
  }
});

// Click Left
$('.modal__overlay--left').on('vclick', function() {
  if (currentSection === 'projects') {
    projectPrevious();
  }
  else if (currentSection === 'design') {
    designPrevious();
  }
});

// Swipe Right
$('.modal__image-container').on('swiperight', function() {
  if (currentSection === 'projects') {
    projectNext();
  }
  else if (currentSection === 'design') {
    designNext();
  }
});

// Swipe Left
$('.modal__image-container').on('swipeleft', function() {
  if (currentSection === 'projects') {
    projectPrevious();
  }
  else if (currentSection === 'design') {
    designPrevious();
  }
});

// Mouse in
$('.modal__image-container').on('mouseover', function() {
  $arrowRight.fadeIn();
  $arrowLeft.fadeIn();
});

// Mouse out
$('.modal__image-container').on('mouseleave', function() {
  $arrowRight.fadeOut();
  $arrowLeft.fadeOut();
});

/////////////////////////////////////////////////////////////////////////////

// PROJECT GALLERY

// Click image
$('.project__image-container').on('vclick', function() {
  $('.overlay').show();
  $('.modal__container').show();
  var index = parseInt($(this).attr('data-project-index'));
  populateModalProject(index);
  currentProject = index;
  currentSection = 'projects';
});

// Mouse in
$('.project__image-container').on('mouseover', function() {
  $(this).children().fadeIn(100);
});

// Mouse out
$('.project__image-container').on('mouseleave', function() {
  $(this).find('.project__image-info').fadeOut(100);
});

var visibleProjectCount = 2;
var incrementProjects = 2;

var showProjects = function () {
  var start = visibleProjectCount - incrementProjects;
  for (var i = start; i < visibleProjectCount; i++) {
    $('[data-project-index=' + i + ']').show();
  }
};
showProjects();

$('.projects__more').on('vclick', function(){
  if (visibleProjectCount >= arrProjects.length) {
    console.log('no more projects');
    $('.projects__more').text("That's it for now!");
    return;
  }
  console.log('more projects');
  visibleProjectCount += incrementProjects;
  showProjects(visibleProjectCount);
});

/////////////////////////////////////////////////////////////////////////////

// Keyboard Events
$(document).on('keydown', function(e) {

  // Esc key
  if (e.which === 27) {
    $('.overlay').fadeOut(100);
    $('.modal__container').hide();
  }

  if (currentSection === 'projects') {
    // Right Arrow
    if (e.which === 39) {
      projectNext();
    }
    // Left arrow
    else if (e.which === 37) {
      projectPrevious();
    }
    return;
  }

  if (currentSection === 'design') {
    // Right arrow
    if (e.which === 39) {
      designNext();
    }
    // Left arrow
    else if (e.which === 37) {
      designPrevious();
    }
  }

});

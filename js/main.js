var currentSection = '';

var arrProjects = [{
  name: 'Musical Monsters',
  img: 'img/musical-monsters.png',
  desc: 'My final project for General Assembly Web Development Immersive'
}, {
  name: 'Sorter',
  img: 'img/sorter.jpg',
  desc: 'Project 2 something something'
}, {
  name: 'Nadine Claire Events',
  img: 'img/nadine-claire-events.jpg',
  desc: 'Events Management'
}];

$('.nav__list-item').on('vclick', function(e) {
  var section = $($(this).children()[0]).attr('data-section');
  currentSection = section;
  $('.main__container').fadeOut(200).delay(200);
  console.log(section);
  $('#' + section).fadeIn(300);
});



$('.nav__toggle').on('vclick', function(e) {
  $('.nav').toggle();
});

$('.nav__list-item').on('vclick', function(e) {
  $('.nav').toggle();
});

// $('.project__container').on('vclick', function(e) {
//   console.log($('.project__image').attr('src', arrImages[1]));
// });

$title = $('.project__title');
$description = $('.project__description');
$img = $('.project__image');

var populateProject = function(index) {
  var objCurrentProject = arrProjects[index];
  $title.text(objCurrentProject.name);
  $description.text(objCurrentProject.desc);
  $img.attr('src', objCurrentProject.img);

};

var indexCurrentProject = 0;

// PREVIOUS PROJECT
var projectNext = function() {
  indexCurrentProject += 1;
  if (indexCurrentProject === arrProjects.length) {
    indexCurrentProject = 0;
  }
  populateProject(indexCurrentProject);
};

// NEXT PROJECT
var projectPrevious = function() {
  indexCurrentProject -= 1;
  if (indexCurrentProject < 0) {
    indexCurrentProject = arrProjects.length - 1;
  }
  populateProject(indexCurrentProject);
};


// CLICK RIGHT
$('.project__overlay--right').on('vclick', function() {
  projectNext();
});

// CLICK LEFT
$('.project__overlay--left').on('vclick', function() {
  projectPrevious();
});

// SWIPE RIGHT
$('.project__container').on('swiperight', function() {
  projectNext();
});

// SWIPE LEFT
$('.project__container').on('swipeleft', function() {
  projectPrevious();
});

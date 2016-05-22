var arrDesign = [
    '24_150102_coralsurfboards.png',
    '26_150104_denim.png',
    '29_150107_exclaim.png',
    '42_150121_flamepen.png',
    '53_150201_printers.png',
    '54_150202_zjoli.png',
    '59_150207_billow.png',
    '66_150214_especially.png',
    '68_150216_pg.png',
    '72_150220_flutterbox.png',
    '73_150221_sb.png',
    '90_150310_yacht.png',
    '91_150311_orbit.png',
    '103_150323_klejnot.png',
    '106_150326_cirque.png',
    '117_150406_L5R.png',
    '118_150407_syntec.png',
    '124_150413_pixelcube.png',
    '130_150420_moller.png',
    '132_150422_flair.png',
    '137_150427_okami.png',
    '138_150428_redtrix.png',
    '139_150429_bookleaf.png',
    '158_150518_studio48.png',
    '161_150521_58.png',
    '172_150601_elmercado.png',
    '176_150605_astral.png',
    '178_150607_vp.png',
    '179_150608_monsieur.png',
    '182_150611_brun.png',
    '190_150619_aperture.png',
    '194_150623_bluegrass.png',
    '196_150625_masterstroke.png',
    '197_150626_bezier.png',
    '209_150708_ellipsis.png',
    '210_150709_ember.png',
    '215_150714_prismrose.png',
    '237_150805_alice.png',
    '249_150818_jsquare.png',
    '252_150821_partial_2.png',
    '253_150822_swan_2.png',
    '260_150829_insistence.png',
    '262_150831_EOM.png',
    '263_150901_miller.png',
    '280_150918_parabola.jpg',
    '282_150920_link.png',
    '288_150926_plumage.jpg',
    '290_150928_tessalate.jpg',
    '299_151007_lesair.jpg',
    '309_151017_platform.jpg',
    '315_151023_crator.jpg',
    '332_151109_joinery.jpg',
    '339_151116_comet.jpg',
    '341_151118_pinnacle.jpg',
    '350_151127_instaprint.jpg',
    '351_151128_montvert.jpg',
    '359_151206_circuitry.jpg',
    '361_151208_dinosaur.jpg',
    '362_151209_gemstar.jpg'
  ];


var arrImagesDesign = [];

for (var i = 0; i < arrDesign.length; i++) {
  var $divDesign = $('<div>');
  $divDesign.addClass('design__image-container');
  $divDesign.attr('data-design-index', i);

  var $imgDesign = $('<img>');
  $imgDesign.addClass('design__image');
  $imgDesign.attr('data-design-index', i);
  // $imgDesign.attr('src', 'img/' + arrDesign[i]);
  arrImagesDesign.push($imgDesign);
  $divDesign.append($imgDesign);
  $divDesign.hide();
  $('.design__gallery').append($divDesign);
}



$('.design__image-container').on('vclick', function() {
  console.log($(this).attr('data-design-index'));
  $('.overlay').show();
  $('.modal__container').show();
  var index = parseInt($(this).attr('data-design-index'));
  populateModalDesign(index);
  currentSection = 'design';
  currentDesign = index;
});

var populateModalDesign = function(index) {
  var img = arrDesign[index];
  $modalImg.attr('src', 'img/' + img);
};

var designNext = function() {
  currentDesign += 1;
  if (currentDesign === arrDesign.length) {
    currentDesign = 0;
  }
  populateModalDesign(currentDesign);
};

var designPrevious = function() {
  currentDesign -= 1;
  if (currentDesign < 0) {
    currentDesign = arrDesign.length - 1;
  }
  populateModalDesign(currentDesign);
};


// Design Gallery
var visibleDesignCount = 4;
var incrementDesigns = 4;

var showMoreDesigns = function () {
  var start = visibleDesignCount - incrementDesigns;
  for (var i = start; i < visibleDesignCount; i++) {
    $('.design__image[data-design-index=' + i + ']').attr('src', 'img/' + arrDesign[i]);
    $('[data-design-index=' + i + ']').show();
  }
};
showMoreDesigns();

$('.designs__more').on('vclick', function(){
  if (visibleDesignCount >= arrDesign.length) {
    console.log('no more designs');
    $('.designs__more').text("That's it for now!");
    return;
  }
  console.log('more designs');
  visibleDesignCount += incrementDesigns;
  showMoreDesigns();
});

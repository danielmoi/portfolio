var CU = {};
CU.$asterisk = $('*');
CU.$html = $('html');
CU.$body = $('body');
CU.$div = $('div');
CU.$grandparent = $('.cu-grandparent');
CU.$parent = $('.cu-parent');
CU.$child = $('.cu-child');


$('#cu-button').on('click', function() {
  CU.magic();
});

CU.magic = function() {
  // get values
  var valAsterisk = $('select[name=cu-size-asterisk]').val();
  var valHTML = $('select[name=cu-size-html]').val();
  var valBody = $('select[name=cu-size-body]').val();
  var valDiv = $('select[name=cu-size-div]').val();
  var valGrandparent = $('select[name=cu-size-grandparent]').val();
  var valParent = $('select[name=cu-size-parent]').val();
  var valChild = $('select[name=cu-size-child]').val();

  // set font-sizes
  CU.$asterisk.css('font-size', valAsterisk);
  CU.$html.css('font-size', valHTML);
  CU.$body.css('font-size', valBody);
  CU.$div.css('font-size', valDiv);
  CU.$grandparent.css('font-size', valGrandparent);
  CU.$parent.css('font-size', valParent);
  CU.$child.css('font-size', valChild);

  // populate text
  $('.cu-asterisk').text(CU.$asterisk.css('font-size'));
  $('.cu-html').text(CU.$html.css('font-size'));
  $('.cu-body').text(CU.$body.css('font-size'));
  $('.cu-div').text(CU.$div.css('font-size'));

  CU.$parentCache = CU.$grandparent.children();
  CU.$childCache = CU.$parent.children();

  CU.populateText(CU.$grandparent);
  CU.$grandparent.append(CU.$parentCache);
  CU.populateText(CU.$parent);
  CU.$parent.append(CU.$childCache);
  CU.populateText(CU.$child);

};

CU.populateText = function(div) {
  var text = '';
  _.times(50, function() {
    text += div.css('font-size') + ' ';
  });
  div.text(text);
};


$(document).on('ready', function() {
  CU.magic();
});

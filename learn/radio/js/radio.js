$('.btn--rs1').on('click', function() {
  $('.radio5-value').text($('input[name="radio5"]:checked').val());
});

/*
Create escaped HTML characters (in Prism)
http://underscorejs.org/#escape
========================================================================== */
// List of HTML entities for escaping.
var htmlEscapes = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#x27;',
  '/': '&#x2F;'
};
// Regex containing the keys listed immediately above.
var htmlEscaper = /[&<>"'\/]/g;
// Escape a string for HTML interpolation.
escapeHTML = function(string) {
  return ('' + string).replace(htmlEscaper, function(match) {
    return htmlEscapes[match];
  });
};
// Find Prism code snippet and escape markup
$('.language-markup').each(function() {
  var codeHtml = $(this).html();
  codeHtml = escapeHTML(codeHtml);
  $(this).html(codeHtml);
});

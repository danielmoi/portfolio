$('#cu-button').on('click', function() {
  magic();
});

var magic = function() {
  console.log($('select[name=cu-size-asterisk]').val());
};

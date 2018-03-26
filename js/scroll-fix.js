scrollDownTo = function(tag) {
  var targetElem = $(tag);
  var targetOffset = targetElem.position();
  var divScrollTop = $('#scrollfix').scrollTop();
  $('#scrollfix').animate({scrollTop: (divScrollTop + targetOffset.top)}, 500 );  
}

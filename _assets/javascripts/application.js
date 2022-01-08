//= require_self

$(document).ready(function() {
  // ScrollAppear
  if (typeof $.fn.scrollAppear === 'function') {
    $('.scrollappear').scrollAppear();
  }

  // Zooming
  new Zooming(
    {customSize: '100%', scaleBase: 0.9, scaleExtra: 0}
  ).listen('.zooming');

});
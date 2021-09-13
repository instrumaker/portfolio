
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

  // 发邮件
  function sendMail()
  {
      var body = document.getElementById("comment").value;
      window.location.href = "mailto:biaopiao@gmail.com?subject=关于"+ substring(document.title.lastIndexOf("-")+1); +"&body="+body;
  }
;

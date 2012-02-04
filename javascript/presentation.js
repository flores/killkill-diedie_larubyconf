$(document).ready(function() {
  x = 0; y = 0;
  $("div.step").each(function() {
    $(this).attr("data-x",0);
    $(this).attr("data-y",y);
    y+=1000;
    $(this).attr("data-scale","1.0");
  });
  $("body").append('<script src="https://raw.github.com/flores/impress.js/master/js/impress.js"></script>');
});
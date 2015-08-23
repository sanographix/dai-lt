$(document).ready(function(){
    // Add target="_blank" when user opens external link
    $('a').each(function() {
      var a = this;
      if (a.origin !== location.origin) {
        $(a).attr('target', '_blank');
      }
    });

    // ぬるっとスクロールする
    $("a[href^=#]").click(function() {
        var scrollHref= $(this).attr("href");
        var scrollPosition = $(scrollHref).offset().top;
        $("html,body").animate({scrollTop : scrollPosition}, '700');
        return false;
    });
});
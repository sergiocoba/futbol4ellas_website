

    // Collapse the navbar when page is scrolled
    $(window).scroll(function() {
        if ($(".navbar-fixed-top").offset().top > 100) {
            $(".navbar-fixed-top").addClass("fixednav").removeClass(".active");
        } else {
            $(".navbar-fixed-top").removeClass("fixednav");
        }
    });

jQuery(document).ready(function() {
  jQuery('.post').addClass("hideme").viewportChecker({
    classToAdd: 'visible animated fadeInDown',
    offset: 100
    });
});

jQuery(document).ready(function() {
  jQuery('#football').addClass("hideme").viewportChecker({
    classToAdd: 'visible animated flipInX',
    offset: 100
    });
}); 


jQuery(document).ready(function() {
  jQuery('.one').addClass("hideme").viewportChecker({
    classToAdd: 'visible animated fadeInLeft',
    offset: 100
    });
});

jQuery(document).ready(function() {
  jQuery('.two').addClass("hideme").viewportChecker({
    classToAdd: 'visible animated fadeInRight',
    offset: 100
    });
});

jQuery(document).ready(function() {
  jQuery('#ellas').addClass("hideme").viewportChecker({
    classToAdd: 'visible animated flipInY',
    offset: 100
    });
});

//smooth scroll on clicking nav items
$('nav a').click(function () {
  var $href = $(this).attr('href');
  $('body').stop().animate({
    scrollTop: $($href).offset().top
  }, 1000);
  return false;
});


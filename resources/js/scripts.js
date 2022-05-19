$(document).ready(function() {
    /*----- STICKY NAV -----*/
    var waypoint = new Waypoint({
      element: $('.js--section-features'),
      handler: function(direction) {
            if (direction == "down") {
                $('nav').addClass('sticky');
            } 
            else {
                $('nav').removeClass('sticky');
            }
        }, offset: '500px;'
    });

    /*----- SCROLL ON BUTTONS -----*/
    $('.js--main-logo').click(function() {
        $('html, body').animate({scrollTop: $('.js--header-section').offset().top}, 500);
    });

    $('.js--scroll-to-plans').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-form').offset().top}, 1000);
    });

    $('.js--scroll-to-start').click(function() {
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top -55}, 1000);
    });

    /*----- SCROLL FROM NAV BUTTONS -----*/
    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
        });
        }
    }
    });

    /*----- ANIMATIONS ON SCROLL -----*/
    var waypoint = new Waypoint({
        element: $('.js--wp-1'),
        handler: function(direction) {
            $('.js--wp-1').addClass('animate__animated animate__fadeIn');
        },
            offset: '50%'
    });

    // var waypoint = new Waypoint({
    //     element: $('.js--wp-2'),
    //     handler: function(direction) {
    //         $('.js--wp-2').addClass('animate__animated animate__fadeInUp');
    //     },
    //         offset: '50%'
    // });

    var waypoint = new Waypoint({
        element: $('.js--wp-3'),
        handler: function(direction) {
            $('.js--wp-3').addClass('animate__animated animate__fadeIn');
        },
            offset: '80%'
    });

    var waypoint = new Waypoint({
        element: $('.js--wp-20'),
        handler: function(direction) {
            $('.js--wp-20').addClass('animate__animated animate__fadeIn');
        },
            offset: '80%'
    });

    var waypoint = new Waypoint({
        element: $('.js--wp-21'),
        handler: function(direction) {
            $('.js--wp-21').addClass('animate__animated animate__fadeIn');
        },
            offset: '80%'
    });

    var waypoint = new Waypoint({
        element: $('.js--wp-22'),
        handler: function(direction) {
            $('.js--wp-22').addClass('animate__animated animate__fadeIn');
        },
            offset: '80%'
    });

    var waypoint = new Waypoint({
        element: $('.js--wp-5'),
        handler: function(direction) {
            $('.js--wp-5').addClass('animate__animated animate__fadeIn');
        },
            offset: '50%'
    });
});
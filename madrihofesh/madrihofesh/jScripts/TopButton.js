$(document).ready(function () {

    jQuery(window).scroll(function () {

        var fromTopPx = 200; // distance to trigger

        var scrolledFromtop = jQuery(window).scrollTop();
        if (scrolledFromtop > fromTopPx) {
            jQuery('#up').addClass('scrolled');
        } else {
            jQuery('#up').removeClass('scrolled');
        }
    });
    jQuery('#up').on('click', function () {
        jQuery("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});
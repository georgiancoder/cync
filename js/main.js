$(document).ready(function () {
    var element = document.getElementById("eventcalendar");
    jsCalendar.new("#eventcalendar", "now", {
        firstDayOfTheWeek: 2,
        dayFormat: "DDD",
        language: 'ge'
    });
    $("button.play").click(function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        var vid = $(this).data('vid');
        $(".video img.thumb").replaceWith("<iframe width=\"530\" height=\"315\" src=\"https://www.youtube.com/embed/" + vid + "?autoplay=1&showinfo=0&controls=0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>");
        $(this).hide();
    });
    $(".playlist li").click(function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        var vid = $(this).data('vid');
        if ($(".video img.thumb").html() != undefined) {
            $(".video img.thumb").replaceWith("<iframe width=\"530\" height=\"315\" src=\"https://www.youtube.com/embed/" + vid + "?autoplay=1&showinfo=0&controls=0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>");
        }
        else {
            $(".video iframe").replaceWith("<iframe width=\"530\" height=\"315\" src=\"https://www.youtube.com/embed/" + vid + "?autoplay=1&showinfo=0&controls=0\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>");
        }
        $("button.play").hide();
    });
    var partners = $('#partners').owlCarousel({
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });
    $(".prevpartner").click(function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        partners.trigger('prev.owl.carousel');
    });
    $(".nextpartner").click(function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        partners.trigger('next.owl.carousel');
    });
    var mainCarousel = $('#mainCarousel').owlCarousel({
        loop: true,
        dots: false,
        nav: true,
        items: 1
    });
    $("#lightgallery").lightGallery();
    $("aside.news div").click(function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        $("aside.news div").removeClass('active');
        $(this).addClass('active');
    });
    $("#newsslider").lightSlider({
        loop: true,
        onSliderLoad: function (el) {
            var img = $(el[0]).find('li.active').data('img');
            $(".mainslide").css('background-image', "url(\"" + img + "\")");
        },
        onAfterSlide: function (el) {
            var img = $(el[0]).find('li.active').data('img');
            $(".mainslide").css('background-image', "url(\"" + img + "\")");
        }
    });
    $("button.viewpdf").click(function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        var pdf = $(this).data('pdf');
        window.open(pdf, '_blank');
    });
    $(".projects button.more").click(function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        var openText = $(this).data('textopen');
        var closeText = $(this).data('textclose');
        $(this).parent().toggleClass('open');
        if ($(this).parent().hasClass('open')) {
            $(this).find('span').html(closeText);
        }
        else {
            $(this).find('span').html(openText);
        }
    });
    $(".projects button.close").click(function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        $(this).parent().removeClass('open');
        var openText = $(this).parent().find('button.more').data('textopen');
        $(this).parent().find('button.more span').html(openText);
    });
});
var map;
var map2;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: 41.726273, lng: 44.764560 },
        zoom: 14,
        scrollwheel: false
    });
    map2 = new google.maps.Map(document.getElementById('map2'), {
        center: { lat: 41.726273, lng: 44.764560 },
        zoom: 14,
        scrollwheel: false
    });
}

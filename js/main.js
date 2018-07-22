$(document).ready(function () {
    var element = document.getElementById("eventcalendar");
    jsCalendar.new("#eventcalendar", "now", {
        firstDayOfTheWeek: 2,
        dayFormat: "DDD",
        language: 'ge'
    });
    var effectus = new EffectusSliderus();
    effectus.init();
    $("#next").click(function () {
        effectus.next();
    });
    $("#prev").click(function () {
        effectus.prev();
    });
    $("button.play").click(function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        var vid = $(this).data('vid');
        $(".video img.thumb").replaceWith("<iframe width=\"530\" height=\"315\" src=\"https://www.youtube.com/embed/" + vid + "?autoplay=1&showinfo=0&modestbranding=1\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>");
        $(this).hide();
    });
    $(".playlist li").click(function (event) {
        event.stopPropagation();
        event.stopImmediatePropagation();
        var vid = $(this).data('vid');
        if ($(".video img.thumb").html() != undefined) {
            $(".video img.thumb").replaceWith("<iframe width=\"530\" height=\"315\" src=\"https://www.youtube.com/embed/" + vid + "?autoplay=1&showinfo=0&modestbranding=1\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>");
        }
        else {
            $(".video iframe").replaceWith("<iframe width=\"530\" height=\"315\" src=\"https://www.youtube.com/embed/" + vid + "?autoplay=1&showinfo=0&modestbranding=1\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>");
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
    // brucianebi
    $("#contrast2").click(function (event) {
        document.cookie = "contrast=night;expires=7;path=/";
        $("body").removeClass('sun highcontrast highcontrast2 highcontrast3');
        $("body").addClass('night');
        event.preventDefault();
    });
    $("#contrast1").click(function (event) {
        document.cookie = "contrast=sun;expires=7;path=/";
        $("body").removeClass('highcontrast highcontrast2 highcontrast3 night');
        event.preventDefault();
    });
    $("#contrast3").click(function (event) {
        document.cookie = "contrast=highcontrast;expires=7;path=/";
        $("body").removeClass('sun night highcontrast2 highcontrast3');
        $("body").addClass('highcontrast');
        event.preventDefault();
    });
    $("#contrast4").click(function (event) {
        document.cookie = "contrast=highcontrast2;expires=7;path=/";
        $("body").removeClass('sun night highcontrast highcontrast3');
        $("body").addClass('highcontrast2');
        event.preventDefault();
    });
    $("#contrast5").click(function (event) {
        document.cookie = "contrast=highcontrast3;expires=7;path=/";
        $("body").removeClass('sun night highcontrast highcontrast2');
        $("body").addClass('highcontrast3');
        event.preventDefault();
    });
    $("#scale").click(function (event) {
        document.cookie = "pagewidth=wide-page;expires=7;path=/";
        $("body").addClass('wide-page');
        event.preventDefault();
    });
    $("#shrink").click(function (event) {
        document.cookie = "pagewidth=narrow;expires=7;path=/";
        $("body").removeClass('wide-page');
        event.preventDefault();
    });
    var k = (document.cookie) ? document.cookie.split(";") : false;
    // console.log(k);
    var obj = {};
    if (k)
        for (i in k) {
            if (k[i].split('=')[0] !== 'undefined' || k[i].split('=')[1] !== 'undefined')
                // console.log('vax bejooo')
                if (k[i].split('=')[0] !== 'undefined' || k[i].split('=')[1] !== 'undefined')
                    obj[k[i].split('=')[0].trim()] = k[i].split('=')[1].trim();
        }
    var count = (obj['pe-font-size']) ? obj['pe-font-size'] : 100;
    var defaulScale = 1;
    var SecFontSize = 10;
    function cookieData(data) {
        var PCookie = document.cookie;
        var scale = PCookie.split(';');
        for (var i = 0; i < scale.length; i++) {
            if (scale[i].split('=')[0].trim() == data) {
                return parseFloat(scale[i].split('=')[1]);
            }
        }
    }
    if (typeof cookieData('scale') != 'undefined') {
        defaulScale = cookieData('scale');
        $('html').css({ transform: 'scale(' + defaulScale + ')' });
    }
    if (typeof cookieData('SecFontSize') != 'undefined') {
        SecFontSize = cookieData('SecFontSize');
    }
    $("#decrease").click(function (event) {
        if (defaulScale == 1 && parseInt(count) > 70) {
            document.body.className = document.body.className.replace(/fsize.*/, "");
            count = parseInt(count) - 10;
            $("body").addClass("fsize" + count);
            document.cookie = "pe-font-size=" + count + ";expires=7;path=/";
            decreeseFont();
        }
        else if (defaulScale > 0.9) {
            defaulScale -= 0.1;
            SecFontSize -= 1.5;
            // console.log('tester')
            $('html').css({ transform: 'scale(' + defaulScale + ')' });
            var ww = window.innerWidth;
            var hw = $('html').width();
            window.scrollTo((hw - ww), 0);
            document.cookie = "scale=" + defaulScale + ";expires=7;path=/";
            document.cookie = "SecFontSize=" + SecFontSize + ";expires=7;path=/";
        }
        event.preventDefault();
    });
    $("#increase").click(function (event) {
        if (defaulScale == 1 && parseInt(count) < 130) {
            $("body").removeClass('fsize' + count);
            count = parseInt(count) + 10;
            $("body").addClass("fsize" + count);
            document.cookie = "pe-font-size=" + count + ";expires=7;path=/";
            encreaseFont();
        }
        else if (defaulScale < 7) {
            defaulScale += 0.1;
            SecFontSize += 1.5;
            $('html').css({ transform: 'scale(' + defaulScale + ')' });
            var ww = window.innerWidth;
            var hw = $('html').width();
            window.scrollTo((hw - ww), 0);
            document.cookie = "scale=" + defaulScale + ";expires=7;path=/";
            document.cookie = "SecFontSize=" + SecFontSize + ";expires=7;path=/";
        }
        event.preventDefault();
    });
    $("#normal").click(function (event) {
        $("body").removeClass('fsize' + count);
        document.cookie = "pe-font-size=100;expires=7;path=/";
        defaulScale = 1;
        SecFontSize = 10;
        $('html').css({ transform: 'scale(' + defaulScale + ')' });
        document.cookie = "scale=" + defaulScale + ";expires=7;path=/";
        document.cookie = "SecFontSize=" + SecFontSize + ";expires=7;path=/";
        resetFont();
        event.preventDefault();
    });
    var fontSize, text, modifyText;
    document.addEventListener('copy', function (e) {
        console.log(defaulScale);
        if (defaulScale <= 1) {
            return false;
        }
        fontSize = ((defaulScale / 1.5) * 50) + 'pt';
        text = document.getSelection().toString();
        console.log(SecFontSize);
        modifyText = '<span style="\
                 font-size:' + SecFontSize + 'pt">'
            + text + '</span>';
        e.clipboardData.setData('text/plain', text);
        e.clipboardData.setData('text/html', modifyText);
        e.preventDefault();
    });
    if (count > 100) {
        //encrease font size
        for (i = 0; i < ((obj['pe-font-size'] - 100) / 10); i++) {
            encreaseFont();
        }
    }
    else if (count < 100) {
        //decrease font size
        for (i = 0; i < ((100 - obj['pe-font-size']) / 10); i++) {
            // console.log(((100 - obj['pe-font-size']) / 10));
            decreeseFont();
        }
    }
    function getClassNames() {
        $("body").removeAttr('class');
        $("body").addClass(obj.contrast);
        $("body").addClass(obj.pagewidth);
        $("body").addClass("fsize" + obj['pe-font-size']);
    }
    getClassNames();
    function decreeseFont() {
        $("a, p, li, button, textarea, input, h1, h2, h3, h4, h5, h6, span, label, time").each(function () {
            $(this).css({ fontSize: (parseInt($(this).css("fontSize")) - 1) + "px" });
        });
    }
    function encreaseFont() {
        $("a, p, li, button, textarea, input, h1, h2, h3, h4, h5, h6, span, label, time").each(function () {
            $(this).css({ fontSize: (parseInt($(this).css("fontSize")) + 1) + "px" });
        });
    }
    function resetFont() {
        if (parseInt(count) > 100) {
            $("a, p, li, button, textarea, input, h1, h2, h3, h4, h5, h6, span, label, time").each(function () {
                $(this).css({ fontSize: (parseInt($(this).css("fontSize")) - ((parseInt(count) - 100) / 10)) + "px" });
            });
            count = 100;
        }
        else if (parseInt(count) < 100) {
            $("a, p, li, button, textarea, input, h1, h2, h3, h4, h5, h6, span, label, time").each(function () {
                $(this).css({ fontSize: (parseInt($(this).css("fontSize")) + ((100 - parseInt(count)) / 10)) + "px" });
            });
            count = 100;
        }
    }
});
var socTop = $('.social').offset().top;
$(window).scroll(function (e) {
    if ($(window).scrollTop() > socTop) {
        $(".social").css("top", $(window).scrollTop() + 200);
    }
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

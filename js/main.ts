$(document).ready(()=>{
    $("#eventcalendar").simpleCalendar({
        days: ['კვ','ორშაბათი','სამშაბათი','ოთხშაბათი','ხუთშაბათი','პარასკევი','შაბათი'],
        fixedStartDay: false
    });
    let partners = $('#partners').owlCarousel({
        loop:true,
        margin:30,
        dots: false,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    });
    $(".prevpartner").click(event=>{
        event.stopPropagation();
        event.stopImmediatePropagation();
        partners.trigger('prev.owl.carousel');
    });
    $(".nextpartner").click(event=>{
        event.stopPropagation();
        event.stopImmediatePropagation();
        partners.trigger('next.owl.carousel');
    });


    let mainCarousel = $('#mainCarousel').owlCarousel({
        loop:true,
        dots: false,
        nav:true,
        items: 1
    });
});

let map;

function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.726273, lng: 44.764560},
        zoom: 14,
        scrollwheel: false
    });
}
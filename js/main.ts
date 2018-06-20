$(document).ready(()=>{
    $("#eventcalendar").simpleCalendar();
});

let map;

function initMap(){
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 41.726273, lng: 44.764560},
        zoom: 14,
        scrollwheel: false
    });
}
$(document).ready(function() {
	initMap();
});


var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 25.033, lng: 121.565},
          zoom: 10
        });
      }
// $(document).ready(function() {
// 	initMap();
// });


var map;
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 25.033, lng: 121.565},
          zoom: 12
        });
      }

// var markerPositionMountain = new google.maps.LatLng(25.093,121.571);
// var markerIconMoutain = {
// 	url: 'icons/MarkerMountain.png',
// 	size: new google.maps.Size(225, 120),
// 	origin: new google.maps.Point(0, 0),
// 	anchor: new google.maps.POint(189, 116)
// };

var markerPositionMountain = new google.maps.LatLng(25.093,121.571);
var marker = new google.maps.Marker({
	position: markerPositionMountain,
	title: 'hello world!'
});

// To add the marker to the map, call setMap()
marker.setMap(map);
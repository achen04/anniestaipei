
// var map;
//       function initMap() {
//         map = new google.maps.Map(document.getElementById('map'), {
//           center: {lat: 25.033, lng: 121.565},
//           zoom: 12
//         });
//       }

// // var markerPositionMountain = new google.maps.LatLng(25.093,121.571);
// // var markerIconMoutain = {
// // 	url: 'icons/MarkerMountain.png',
// // 	size: new google.maps.Size(225, 120),
// // 	origin: new google.maps.Point(0, 0),
// // 	anchor: new google.maps.POint(189, 116)
// // };

// var markerPositionMountain = new google.maps.LatLng(25.093,121.571);
// var marker = new google.maps.Marker({
// 	position: markerPositionMountain,
// 	map: map,
// 	title: 'hello world!'
// });

// // To add the marker to the map, call setMap()

function initMap() {
  var center = {lat: 25.033, lng: 121.565};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: center
  });

  setMarkers(map);
}

var mountainLatLng = {lat: 25.093, lng: 121.571};

function setMarkers(map) {
	var image = {
		url: 'icons/MarkerMountain.png',
		size: new google.maps.Size(225, 120),
		origin: new google.maps.point(0,0),
		anchor: new google.maps.Point(110, 116)
	};
	var shape = {
		coords: [1,1, 224, 119],
		type: 'rect'
	};


	var marker = new google.maps.Marker({
    position: mountainLatLng,
    map: map,
    icon: image,
    shape: shape,
    animation: google.maps.Animation.DROP,
    title: 'Mountain!'
  });
}









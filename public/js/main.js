
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
	var image = "https://lh4.googleusercontent.com/5c_9rWboo8aMd-WAdgnZ8bxuAPvNZd9oSgV2SybImAG_D3LVuCZZqE0y1TFLSAUsXTxXE6VdUDtitrs=w1264-h750"
	
	// var image = {

	// 	// url: 
	// 	// origin: new google.maps.Point(0,0),
	// 	// anchor: new google.maps.Point(110, 116)
	// };
	var shape = {
		coords: [1,1, 249, 249],
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


// var beaches = [
//   ['Bondi Beach', -33.890542, 151.274856, 4],
//   ['Coogee Beach', -33.923036, 151.259052, 5],
//   ['Cronulla Beach', -34.028249, 151.157507, 3],
//   ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
//   ['Maroubra Beach', -33.950198, 151.259302, 1]
// ];

// function setMarkers(map) {
//   // Adds markers to the map.

//   // Marker sizes are expressed as a Size of X,Y where the origin of the image
//   // (0,0) is located in the top left of the image.

//   // Origins, anchor positions and coordinates of the marker increase in the X
//   // direction to the right and in the Y direction down.
//   var image = {
//     url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
//     // This marker is 20 pixels wide by 32 pixels high.
//     size: new google.maps.Size(20, 32),
//     // The origin for this image is (0, 0).
//     origin: new google.maps.Point(0, 0),
//     // The anchor for this image is the base of the flagpole at (0, 32).
//     anchor: new google.maps.Point(0, 32)
//   };
//   // Shapes define the clickable region of the icon. The type defines an HTML
//   // <area> element 'poly' which traces out a polygon as a series of X,Y points.
//   // The final coordinate closes the poly by connecting to the first coordinate.
//   var shape = {
//     coords: [1, 1, 1, 20, 18, 20, 18, 1],
//     type: 'poly'
//   };
//   for (var i = 0; i < beaches.length; i++) {
//     var beach = beaches[i];
//     var marker = new google.maps.Marker({
//       position: {lat: beach[1], lng: beach[2]},
//       map: map,
//       icon: image,
//       shape: shape,
//       title: beach[0],
//       zIndex: beach[3]
//     });
//   }
// }






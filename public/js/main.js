// Note: Only the Mountain marker has a pop up info currently

function initMap() {
  var center = {lat: 25.066, lng: 121.537};

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: center
  });



// The Latitude and Longitude of each marker
var mountainLatLng = {lat: 25.093, lng: 121.571};
var shiLinLatLng = {lat: 25.088, lng: 121.525};
var waffleLatLng = {lat: 25.053, lng: 121.521};
var hotspringLatLng = {lat: 25.136, lng: 121.506};
var noodleLatLng = {lat: 25.033, lng: 121.528};
var titleLatLng = {lat: 25.131, lng: 121.371};

//Variable containing the style for the pop-up infobox.
var pop_up_info = "border: 0px solid black; background-color: #ffffff; padding:15px; margin-top: 8px; border-radius:10px; -moz-border-radius: 10px; -webkit-border-radius: 10px; box-shadow: 1px 1px #888;";


// ************** MOUNTAIN MARKER ******************* //
// Defining the image of each marker
	var image = {
		url: '../content/IconMt.png',
		size: new google.maps.Size(225, 120),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(53, 105)
	};
	var shape = {
      coord: [86,106,109,97,116,90,167,75,179,47,156,20,114,12,63,22,45,48,56,73,96,90],
      type: 'poly'
	};

// Setting the marker on the map
	var mountainMarker = new google.maps.Marker({
	    position: mountainLatLng,
	    map: map,
	    icon: image,
	    shape: shape,
	    animation: google.maps.Animation.DROP,
	    title: 'Mountain Hiking Trail - City View',
	    zIndex: 107
  });

// ************** SHILIN MARKER ******************* //
// Defining the image of each marker
	var image = {
		url: '../content/IconShiLin.png',
		size: new google.maps.Size(225, 120),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(53, 105)
	};
	var shape = {
      coord: [12,4,216,22,212,74,157,70,184,111,125,67,6,56],
      type: 'poly'
	};

// Setting the marker on the map
	var shiLinMarker = new google.maps.Marker({
	    position: shiLinLatLng,
	    map: map,
	    icon: image,
	    shape: shape,
	    animation: google.maps.Animation.DROP,
	    title: 'ShiLin Nightmarket',
	    zIndex: 108
  });


// ************** WAFFLE MARKER ******************* //
// Defining the image of each marker
	var image = {
		url: '../content/IconWaffle.png',
		size: new google.maps.Size(225, 120),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(53, 105)
	};
	var shape = {
      coord: [12,4,216,22,212,74,157,70,184,111,125,67,6,56],
      type: 'poly'
	};

// Setting the marker on the map
	var waffleMarker = new google.maps.Marker({
	    position: waffleLatLng,
	    map: map,
	    icon: image,
	    shape: shape,
	    animation: google.maps.Animation.DROP,
	    title: 'Melange Cafe',
	    zIndex: 109
  });



// ************** HOTSPRING MARKER ******************* //
// Defining the image of each marker
	var image = {
		url: '../content/IconHotspring.png',
		size: new google.maps.Size(225, 120),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(53, 105)
	};
	var shape = {
      coord: [12,4,216,22,212,74,157,70,184,111,125,67,6,56],
      type: 'poly'
	};

// Setting the marker on the map
	var hotspringMarker = new google.maps.Marker({
	    position: hotspringLatLng,
	    map: map,
	    icon: image,
	    shape: shape,
	    animation: google.maps.Animation.DROP,
	    title: 'Beitou Hotsprings',
	    zIndex: 110
  });

// ************** NOODLE MARKER ******************* //
// Defining the image of each marker
	var image = {
		url: '../content/IconNoodle.png',
		size: new google.maps.Size(225, 120),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(53, 105)
	};
	var shape = {
      coord: [12,4,216,22,212,74,157,70,184,111,125,67,6,56],
      type: 'poly'
	};

// Setting the marker on the map
	var noodleMarker = new google.maps.Marker({
	    position: noodleLatLng,
	    map: map,
	    icon: image,
	    shape: shape,
	    animation: google.maps.Animation.DROP,
	    title: 'Yong Kang Beef Noodles',
	    zIndex: 111
  });


// ************** TITLE MARKER ******************* //
// Note: To be changed into a title that will always remain top left
// despite zomming
	var image = {
		url: '../content/Title.png',
		size: new google.maps.Size(225, 120),
		origin: new google.maps.Point(0,0),
		anchor: new google.maps.Point(225, 120) // bottom left of image
	};
	var shape = {
      coord: [0, 0, 225, 120],
      type: 'rect'
	};

// Setting the marker on the map
	var titleMarker = new google.maps.Marker({
	    position: titleLatLng,
	    map: map,
	    icon: image,
	    shape: shape,
	    animation: google.maps.Animation.DROP,
	    title: 'Annies Taipei',
	    zIndex: 112
  });


// **************  INFO BOXES ******************* //

// **************  MOUNTAIN INFO ******************* //
// Information to go in the pop-up info box.
var boxTextMountain = document.createElement("div");
boxTextMountain.style.cssText = pop_up_info;
boxTextMountain.innerHTML = '<span class="pop_up_box_text"><img src="../content/mountainview.jpg" width="400" height="285" border="0" /></span> <p> 剪刀山 Mountain Trail - A roughly 1.5 hour trial with a fantastic city view. </p>';


// Sets up the options of the pop up info box
var infoBoxOptionsMountain = {
	content: boxTextMountain,
	disableAutoPan: false,
	maxWidth: 0,
	pixelOffset: new google.maps.Size(-241, 0),
	zIndex: null,
	boxStyle: {
		background:"url('../content/pop_up_box_top_arrow.png') no-repeat",
		opacity: 1,
		width: "430px"
	},
	closeBoxMargin: "10px 2px 2px 2px",
	closeBoxURL: "../content/button_close.png",
	infoBoxClearance: new google.maps.Size(1, 1),
	isHidden: false,
	pane: "floatPane",
	enableEventPropagation: false
};

// Creates pop up info box for Mountain marker, and adding the options above
var infoBoxMountain = new InfoBox(infoBoxOptionsMountain);

// Event listener for when it is clicked
google.maps.event.addListener(mountainMarker, "click", function (e) {
	//Open the Mountain info box
	infoBoxMountain.open(map, this);
	//Changes the z-index property of the marker to make the marker appera on top of other markers.
	this.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
});


// testing
var infoBoxOptions = {
	disableAutoPan: false,
	maxWidth: 0,
	pixelOffset: new google.maps.Size(-241, 0),
	zIndex: null,
	boxStyle: {
		background:"url('../content/pop_up_box_top_arrow.png') no-repeat",
		opacity: 1,
		width: "430px"
	},
	closeBoxMargin: "10px 2px 2px 2px",
	closeBoxURL: "../content/button_close.png",
	infoBoxClearance: new google.maps.Size(1, 1),
	isHidden: false,
	pane: "floatPane",
	enableEventPropagation: false
};



// **************  SHILIN INFO ******************* //
// Information to go in the pop-up info box.
var boxTextShiLin = document.createElement("div");
boxTextShiLin.style.cssText = pop_up_info;
boxTextShiLin.innerHTML = '<span class="pop_up_box_text"><img src="../content/shilin.jpg" width="400" height="285" border="0" /></span> <p> ShiLin Nightmarket with great food, games, and lots to shop! </p>';


// Sets up the options of the pop up info box
var infoBoxOptionsNew {
	content: boxTextShiLin
};

var infoboxOptionsShiLin = infoBoxOptionsNew + infoBoxOptions;


// Creates pop up info box for Mountain marker, and adding the options above
var infoBoxShiLin = new InfoBox(infoBoxOptionsShiLin);

// Event listener for when it is clicked
google.maps.event.addListener(shiLinMarker, "click", function (e) {
	//Open the Mountain info box
	infoBoxShiLin.open(map, this);
	//Changes the z-index property of the marker to make the marker appera on top of other markers.
	this.setZIndex(google.maps.Marker.MAX_ZINDEX + 1);
});



}






$(document).ready(function() {
	searchWeather();
});

// function getDistance() {
	
// 	var url = 'https://maps.googleapis.com/maps/api/distancematrix/json?';
// 	var params = {
// 		APPID: googleApiKey,
// 		units: 'imperial'
// 	};


// }

// function storeOrigin() {
// 	var originQuery = $('.origin').val();


// }

// function storeDestination() {
// 	var destinationQuery = $('.destination').val();

// }

// function getWeather(searchQuery) {
// 	var url = 'http://api.openweathermap.org/data/2.5/weather?';
// 	var params = {
// 		APPID: apiKey,
// 		units: 'imperial'
// 	};
// 	if (searchQuery) {
// 		params.q = searchQuery;
// 	} else {
// 		params.id = 4930956
// 	}
// 	$.ajax(url + $.param(params), {
// 		success: function (data) {
// 			$('.city').text(data.name);
// 			$('.temp').text(data.main.temp + ' °F')
// 		}
// 	});
// }

// 	function searchWeather() {
// 		var searchQuery = $('.search').val(); // grab value from search input
// 		getWeather(searchQuery)
// 	}
// }

$ means jquery
$.ajax is a jQuery function to give front end something from back end. in this specific
case, it's to use the URL, and if successful, passes the data to the front end
function getWeather(searchQuery) {
	var url = 'http://api.openweathermap.org/data/2.5/weather?';
	var params = {
		APPID: apiKey,
		units: 'imperial'
	};
	if (searchQuery) {
		params.q = searchQuery;
	} else {
		params.id = 4930956
	}

	$.ajax(url + $.param(params), {
		success: function (data) {
			$('.city').text(data.name);
			$('.temp').text(data.main.temp + ' °F');
		}, error: function (error) {
			$('.error-message').text('An error occurred!');
		}
	});

}

function searchWeather() {
	var searchQuery = $('.search').val(); //grab value from search input
	getWeather(searchQuery);
}

function myFunction() {
  document.getElementById("demo").innerHTML = "heheh";
}


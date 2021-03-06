//when the jQuery Mobile page is initialised
$(document).on('pageinit', function() {
	
	//set up listener for button click
	$(turnon).on('click', getPosition);
		$(turnoff).on('click', turnoffPosition);
	//change time box to show message
	$('#time').val("Press the button to get location data");
	
});


//Call this function when you want to get the current position
function getPosition() {
	
	//change time box to show updated message
	$('#time').val("Getting data...");
	
	//instruct location service to get position with appropriate callbacks
	navigator.geolocation.getCurrentPosition(successPosition, failPosition);
}


//called when the position is successfully determined
function successPosition(position) {
	
	//You can find out more details about what the position obejct contains here:
	// http://www.w3schools.com/html/html5_geolocation.asp
	

	//lets get some stuff out of the position object
	var time = position.timestamp;
	var latitude = position.coords.latitude;
	var unixtime = (new Date(1291656749000)).toUTCString();
	var longitude = position.coords.longitude;
	//OK. Now we want to update the display with the correct values
	$('#time').val("Recieved data at " + unixtime);
	$('#lattext').val(latitude);
	$('#longtext').val(longitude);
}

var watchID = navigator.geolocation.watchPosition(
 success, fail, locationOptions);
function success(position) {
 //do something with the position
 var locationOptions = {
 maximumAge: 10000,
 timeout: 6000,
 enableHighAccuracy: true
	var longitude = position.coords.longitude;
	//OK. Now we want to update the display with the correct values
	$('#lattext').val(latitude);
	$('#longtext').val(longitude);
};

}
function fail(error) {
 //do something with the error 
 navigator.geolocation.clearWatch(watchID);
 $('#time').val("Error getting data: " + error);

}

//called if the position is not obtained correctly
function failPosition(error) {
	//change time box to show updated message
	$('#time').val("Error getting data: " + error);
	
}

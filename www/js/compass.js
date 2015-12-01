// Add deviceready event
document.addEventListener("deviceready", onDeviceReady, false);

// Function that runs when device is ready
function onDeviceReady() {

    // Options for the navigator
    var options = {
        frequency: 50
    }; // Update every 3 seconds

    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
}

// Runs when compass heading is sucessfully gathered
function onSuccess(heading) {
    // Draw the compass with the new heading
    drawCompass(heading.magneticHeading);
};

// Runs when errors occur trying to gather compass heading
function onError(compassError) {
    alert('Compass error: ' + compassError.code);
};

// Draws the compass and all its components
function drawCompass(angle) {
	// Properties for the compass
	var compass = {
		background: "#2ecc71",
		width: 40,
		color: {
			north: "#e74c3c",
			south: "#ecf0f1"
		}
	};

	// Display degrees
	document.querySelector(".example").innerHTML = "&deg;" + angle;

	// Draw the compass with the provided angle
}
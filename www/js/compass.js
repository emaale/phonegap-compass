// Add deviceready event
document.addEventListener("deviceready", onDeviceReady, false);

// Function that runs when device is ready
function onDeviceReady() {

    // Options for the navigator
    var options = {
        frequency: 3000
    }; // Update every 3 seconds

    var watchID = navigator.compass.watchHeading(onSuccess, onError, options);
}

function onSuccess(heading) {
    alert(heading.magneticHeading);
};

function onError(compassError) {
    alert('Compass error: ' + compassError.code);
};
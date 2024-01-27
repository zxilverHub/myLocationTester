const longitude = document.querySelector('#longitude'),
      latitude = document.querySelector('#latitude');

try {
    navigator.geolocation.getCurrentPosition(getPosition);
} catch(error) {
    console.log(error);
}

function getPosition(position) {
    longitude.innerHTML = position.coords.longitude
    latitude.innerHTML = position.coords.latitude
}
const longitude = document.querySelector('#longitude'),
      latitude = document.querySelector('#latitude'),
      getBtn = document.getElementById('get-btn');


function getLocation() {
    try {
        navigator.geolocation.getCurrentPosition(getPosition);
    } catch(error) {
        console.log(error);
    }
}

function getPosition(position) {
    longitude.innerHTML = position.coords.longitude
    latitude.innerHTML = position.coords.latitude
}

getBtn.addEventListener('click', ()=> {
    getLocation()
})
const longitude = document.querySelector('#longitude'),
      latitude = document.querySelector('#latitude'),
      getBtn = document.getElementById('get-btn'),
      stopBtn = document.getElementById('stop-btn'),
      myLocation = setInterval(locationSetter, 10);


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

function locationSetter() {
    try {
        navigator.geolocation.getCurrentPosition(getPosition);
    } catch(error) {
        console.log(error);
    }
}

stopBtn.addEventListener('click', ()=>{
    clearInterval(myLocation);
})
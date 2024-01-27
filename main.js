const nlongitude = document.querySelector('#longitude'),
      nlatitude = document.querySelector('#latitude'),
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
    nlongitude.innerHTML = position.coords.longitude
    nlatitude.innerHTML = position.coords.latitude
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


const alongitude = document.querySelector('#longitude-api'),
      alatitude = document.querySelector('#latitude-api'),
      astopBtn = document.getElementById('stop-btn-api'),
      amyLocation = null;


navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;

    amyLocation = setInterval(aGetLocation(latitude, longitude), 10);
});

function aGetLocation(la, lo) {
    alongitude.innerHTML = lo
    alatitude.innerHTML = la
}

astopBtn.addEventListener('click', ()=>{
    clearInterval(amyLocation);
})

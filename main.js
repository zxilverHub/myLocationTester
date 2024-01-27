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
      counter = document.getElementById('counter');

let count = 0;


const watch = navigator.geolocation.watchPosition(position => {
    const { latitude, longitude } = position.coords;

    count+=1;
    aGetLocation(latitude, longitude, count);
});

function aGetLocation(la, lo, c) {
    alongitude.innerHTML = lo
    alatitude.innerHTML = la
    counter.innerHTML = c;
}

astopBtn.addEventListener('click', ()=>{
    navigator.geolocation.clearWatch(watch);
})

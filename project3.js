const time = document.getElementById("clock");

// const date= new Date();
// console.log(date.toLocaleTimeString());

setInterval(function () {
    let date = new Date();
    time.innerHTML = date.toLocaleTimeString();
}, 1000);
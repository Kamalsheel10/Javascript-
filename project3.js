const time = document.getElementById("clock");

// const date= new Date();
// console.log(date.toLocaleTimeString());

setInterval(function(){
    const date=new Date()
    console.log(date.toLocaleTimeString())
    time.innerHTML=date.toLocaleTimeString();
},1000)
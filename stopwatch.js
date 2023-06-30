let hour = document.querySelector('.hour')
let min = document.querySelector('.min')
let sec = document.querySelector('.sec')
let milli = document.querySelector('.milli')
let start = document.querySelector('.start')
let stop = document.querySelector('.stop')
let reset = document.querySelector('.reset')
let save = document.querySelector('.save')
let data=document.getElementById('data')
let clear =document.getElementById('clear')
let sdata=document.querySelector('.saved-data')
let time =document.querySelectorAll('.time')
console.log(time);

let ms = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let sto;
var secon;
let list;


if (localStorage.getItem('names') == null) {
    localStorage.setItem('names', '[]');
    console.log("local storage");
}

let stopwatch = () => {
    ms++;

    if (ms == 100) {
        ms = 0;
        seconds++;
    }
    else if (seconds == 60) {
        seconds = 0;
        minutes++;
    }

    else if (minutes == 60) {
        minutes = 0;
        hours++;
    }
    else if (hour == 24) {
        hours = 0
    }

    milli.innerHTML = ms;

    secon = seconds <= 9 ? sec.innerHTML = '0' + seconds : sec.innerHTML = seconds;
    minutes <= 9 ? min.innerHTML = '0' + minutes : min.innerHTML = minutes;
    hours <= 9 ? hour.innerHTML = '0' + hours : hour.innerHTML = hours

}

start.addEventListener('click', () => {

    if (!start.classList.contains('disabled')) {
        sto = setInterval(stopwatch, 10);
    }
    start.classList.add('disabled')
})



stop.addEventListener('click', () => {
    clearInterval(sto)

    start.classList.remove('disabled')

})

reset.addEventListener('click', () => {
    seconds = 0;
    hours = 0;
    minutes = 0;
    ms = 0;
    sec.innerHTML = '0' + seconds
    min.innerHTML = '0' + minutes
    hour.innerHTML = '0' + hours
    milli.innerHTML = '0' + ms;
})


clear.addEventListener('click',()=>{
    console.log('clear');
    localStorage.clear('names')
})

save.addEventListener('click', () => {
    
    let na = JSON.parse(localStorage.getItem('names'));
    let pushdata = { hours: hour.textContent, minutes: min.textContent, seconds: sec.textContent, milliseconds: milli.textContent }
    na.push(pushdata)

    localStorage.setItem('names', JSON.stringify(na))

    sdata.classList.toggle('hide')
    
    
}) 

let deletedata=()=>{
    // localStorage.removeItem('names')

    console.log('remove item');  
}


let ls=JSON.parse(localStorage.getItem('names'))
console.log(ls.length);

if (ls.length >=1) {
    function saveddata() {
        let sdata=JSON.parse(localStorage.getItem('names'))
    
        sdata.map((da)=>{
            list =document.createElement('li')
            list.classList.add('time')
            list.innerHTML=`${da.hours} h : ${da.minutes} m : ${da.seconds} s : ${da.milliseconds} ms `;
            data.append(list)
        })
    }
    saveddata()
}


if (list!=null) {
    list.addEventListener('click',()=>{
        console.log('remove item');
    })
    
}
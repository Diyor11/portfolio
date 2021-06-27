let bars = document.getElementById('bar').style;
let times = document.getElementById('time').style;
let header = document.querySelector('header').style;
let section = document.querySelector('section').style;
let homeText = document.getElementById('home-text');
let container = document.getElementsByClassName("container");
let hideBtn = document.getElementById('hide-btn').style;
let hideP = document.getElementById('hide-p').style;
const first = document.getElementById('first');
let i = document.getElementById('i');
let netText = document.getElementById('net-text');
const net = document.getElementById('net-ckecker');

function hide(){
    if(bars.display === 'block'){
        bars.display = 'none';
        times.display = 'block';
        header.left = '0';
    }
    else{
        bars.display = 'block';
        times.display = 'none';
        header.left = '-320px';
    }
}
function readMore(){
    hideBtn.display ='none';
    hideP.display='block';
}

let defaultNum = 0;

if(window.innerWidth > 577){
    setInterval(() =>{
        next()
        function next() {
            if (defaultNum > -1500){
                defaultNum = defaultNum - 500;
                first.style.marginLeft = defaultNum + 'px';
            }
            else{
            defaultNum = 0;
            first.style.marginLeft = defaultNum + 'px';
            }
        }
        function prev() {
            if (defaultNum < 0) {
                defaultNum = defaultNum + 500;
                first.style.marginLeft = defaultNum + 'px';
            }
            else{
                defaultNum = -1500;
                first.style.marginLeft = defaultNum + 'px';
            }
        }
    },3000)
}
else{
        setInterval(() =>{
            next()
            function next() {
                if (defaultNum > -900){
                    defaultNum = defaultNum - 300;
                    first.style.marginLeft = defaultNum + 'px';
                }
                else{
                defaultNum = 0;
                first.style.marginLeft = defaultNum + 'px';
                }
            }
            function prev() {
                if (defaultNum < 0) {
                    defaultNum = defaultNum + 300;
                    first.style.marginLeft = defaultNum + 'px';
                }
                else{
                    defaultNum = -900;
                    first.style.marginLeft = defaultNum + 'px';
                }
            }
        },3000)
}
setInterval(() => {
    let online = navigator.onLine;
    if(online){
        i.style.backgroundColor = '#0ee60e';
        netText.innerHTML = 'online';
        setTimeout(() => {
            net.style.left = '-300px';
        }, 1500);
    }
    else{
        i.style.backgroundColor = '#df0606';
        netText.innerHTML = 'offline';
        net.style.left = '10px';
        window.navigator.vibrate(300);
    }
},5000)    
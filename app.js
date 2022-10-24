// const currText = document.getElementById("animate1")
let timeCt = 0;

function animatorText(currText) {
    currText.classList.remove("hide")
    const strText = currText.textContent;
    const splitText = strText.split("")
    currText.textContent = ""
    for (let i = 0; i < splitText.length; i++) {
        currText.innerHTML += "<span>" + splitText[i] + "</span>"
    }
    let char = 0;

    let timer = setInterval(onTick, 10)

    function onTick() {
        const span = currText.querySelectorAll('span')[char]
        span.classList.add('fadeIn')
        char++
        if (char === splitText.length) {
            complete();
            return;
        }
    }

    function complete() {
        // clearInterval(hshow)
        clearInterval(timer)
        timer = null;
    }
}

function animatorTextOut(currText) {
    console.log(currText)
    const strText = currText.textContent;
    const splitText = strText.split("")
    currText.textContent = ""
    for (let i = 0; i < splitText.length; i++) {
        currText.innerHTML += "<span>" + splitText[i] + "</span>"
    }
    let char = 0;

    let timer = setInterval(onTick, 10)

    function onTick() {
        const span = currText.querySelectorAll('span')[char]
        // span.classList.remove('fadeIn')
        // span.style.opacity = 1
        span.classList.add('fadeOut')
        char++
        if (char === splitText.length) {
            complete();
            return;
        }
    }

    function complete() {
        // clearInterval(hshow)
        clearInterval(timer)
        timer = null;
    }
}

// const txt1 = document.getElementById("animate2")
// const txt2 = document.getElementById("animate3")
// let t1 = setInterval(animatorText, 1000, txt1, 1)
// setTimeout(() => {clearInterval(t1)}, 1000);
// let t11 = setInterval(animatorTextOut, 3000, txt1, 2)
// setTimeout(() => {clearInterval(t11)}, 3000);
// let t2 = setInterval(animatorText, 3000, txt2, 1)
// setTimeout(() => {clearInterval(t2)}, 3000);
// let t21 = setInterval(animatorTextOut, 5000, txt2, 2)
// setTimeout(() => {clearInterval(t21)}, 5000);

// let t11 = setInterval(animatorText, 2000, txt1, "t11")

// let t2 = setInterval(animatorText, 4000, txt2)

const txtArr = document.querySelectorAll(".animatorTxtC")
let timerTime = 1000;
for (let i = 0; i < txtArr.length; i++) {
    let t1 = setInterval(animatorText, timerTime, txtArr[i]);
    setTimeout(() => {clearInterval(t1)}, timerTime);
    let tt = timerTime + 2500;
    let t11 = setInterval(animatorTextOut, tt, txtArr[i])
    setTimeout(() => {clearInterval(t11)}, tt);
    timerTime += 3000
    console.log(timerTime)
}


const quoteArr = document.querySelectorAll(".quote")
function quoteFunc(q){

    for(let i=0; i<quoteArr.length; i++){
        quoteArr[i].classList.remove("hide")
    }
}
let t121 = setInterval(quoteFunc, timerTime);
    setTimeout(() => {clearInterval(t121)}, timerTime);


    // window.addEventListener('load', function () {
    //     var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    //     var source = audioCtx.createBufferSource();
    //     var xhr = new XMLHttpRequest();
    //     xhr.open('GET', 'audio-autoplay.wav');
    //     xhr.responseType = 'arraybuffer';
    //     xhr.addEventListener('load', function (r) {
    //         audioCtx.decodeAudioData(
    //                 xhr.response, 
    //                 function (buffer) {
    //                     source.buffer = buffer;
    //                     source.connect(audioCtx.destination);
    //                     source.loop = false;
    //                 });
    //         source.start(0);
    //     });
    //     xhr.send();
    // });

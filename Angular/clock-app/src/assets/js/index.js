let indianClock = document.querySelector('#indianClock');
let dubaiClock = document.querySelector('#dubaiClock');
let usaClock = document.querySelector('#usaClock');


function abc(a){
console.log(a);
}

abc('Test');
abc(123);
abc(false)


function jsClock(props) {
    let date = new Date().toLocaleString('EN-US', { timeZone: props });
    let ui = `
    <div>
    <div>${props}</div>
    <p> ${date}</p>
    </div>

    `
    return ui;
}

setInterval(() => {
    indianClock.innerHTML = jsClock('Asia/Kolkata');
    dubaiClock.innerHTML = jsClock('Asia/Dubai');
    usaClock.innerHTML = jsClock('America/New_York');

}, 1000)





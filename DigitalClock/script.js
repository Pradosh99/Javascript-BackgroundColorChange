const clock = document.getElementById('mytime');

setInterval(() => {
    let time = new Date();
    clock.innerHTML = time.toLocaleTimeString();
}, 1000);

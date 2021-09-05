window.onload = function () {
    setInterval(updateTime, 1000)
};

function updateTime() {
    const hourEl = document.querySelector('#hour');
    const minuteEl = document.querySelector('#minute');
    const secondEl = document.querySelector('#second');
    let d = new Date();
    let hours = d.getHours();
    let minutes = d.getMinutes();
    let seconds = d.getSeconds();
    if (hours > 12) hours = -12 + hours ;
    hourEl.innerHTML = hours;
    minuteEl.innerHTML = minutes;
    secondEl.innerHTML = seconds;

    const dateEl = document.querySelector('#date');
    let date = d.getDate();
    let month = d.getMonth() + 1;
    let year = d.getFullYear();
    dateEl.innerHTML = date + '/' + month + '/' + year;

    const dayEl = document.querySelector('#day');
    let dayNumber = d.getDay();
    let day = '';
    switch (dayNumber) {
        case 0: day = 'Sunday'; break;
        case 1: day = 'Monday'; break;
        case 2: day = 'Tuesday'; break;
        case 3: day = 'Wednesday'; break;
        case 4: day = 'Thrusday'; break;
        case 5: day = 'Friday'; break;
        case 6: day = 'Saturday'; break;
    }
    dayEl.innerHTML = day;
}
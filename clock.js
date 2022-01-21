let hours = " -- ",
    minutes = " -- ",
    seconds = " -- ";
let clockContainer = document.querySelector('.clock').innerText = hours + ":" + minutes + ":"+ seconds;    

    const clock = function () {
        let date = new Date();
        let hours = date.getHours();
        if (date.getHours() < 10) {
            hours = '0' + date.getHours();
        } else {
            hours = date.getHours();
        };

        let minutes = date.getMinutes();
        if (date.getMinutes() < 10) {
            minutes = '0' + minutes;
        } else {
            minutes = minutes;
        }
  
        let seconds = date.getSeconds();
        if (date.getSeconds() < 10) {
            seconds = '0' + date.getSeconds();
        } else {
            seconds = date.getSeconds();
        };

    const clockContainer = document.querySelector('.clock').innerText = hours + ":" + minutes + ":"+ seconds;
};
let idIntervals;
const startBtn = document.getElementById('btn-start');
startBtn.addEventListener('click', function () {
    idIntervals = setInterval(clock, 1000);
}); 


const stopBtn = document.getElementById('btn-stop');
stopBtn.addEventListener('click', function () {
    clearInterval(idIntervals);
});  



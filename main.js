let displayHours = document.getElementById('hours');
let displayMinutes = document.getElementById('minutes');
let displaySeconds = document.getElementById('seconds');
let displayAmPm = document.getElementById('am-pm');
let twelveTwentyfourButton = document.getElementById('twelve-hour-button');

let bstToggle = true;
let twelveHourToggle = false;

const twelveHourToggler = () => twelveHourToggle ? twelveHourToggle = false : twelveHourToggle = true;

const calculateCurrentTime = () => {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    //bstToggle ? hours ++ : hours;
    if (twelveHourToggle) {
        hours >= 12 ? displayAmPm.innerHTML = 'PM' : displayAmPm.innerHTML = 'AM';
        hours > 12 ? hours -= 12 : hours;
        hours > 9 ? displayHours.innerHTML = hours : displayHours.innerHTML = '0' + hours;
    } else {
        displayAmPm.innerHTML = '';
        hours > 9 ? displayHours.innerHTML = hours : displayHours.innerHTML = '0' + hours;
    }
    minutes > 9 ? displayMinutes.innerHTML = minutes : displayMinutes.innerHTML = '0' + minutes;
    seconds > 9 ? displaySeconds.innerHTML = seconds : displaySeconds.innerHTML = '0' + seconds;
    
  };
  
  let intervalId = setInterval(calculateCurrentTime, 1000);

  twelveTwentyfourButton.addEventListener('click' , twelveHourToggler);

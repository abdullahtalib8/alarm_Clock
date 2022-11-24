const display = document.getElementById("clock");
const audio = new Audio("alarm_sound.mp3");

audio.loop = true;
let alarmTime = null;
let alarmTimeout = null;

function updateTime() {
  const date = new Date();

  const hour = formatTime(date.getHours());
  const minutes = formatTime(date.getMinutes());
  const seconds = formatTime(date.getSeconds());

  display.innerHTML = `${hour}:${minutes}:${seconds}`;
}

function formatTime(time) {
  if (time < 10) {
    return "0" + time;
  }
  return time;
}

function setAlarmTime(value) {
  alarmTime = value;
  // console.log(alarmTime);
}

function setAlarm() {
  if (alarmTime) {
    const currrent = new Date();
    const timeToAlarm = new Date(alarmTime);

    if (timeToAlarm > currrent) {
      const timeout = timeToAlarm.getTime() - currrent.getTime();
      alarmTimeout = setTimeout(() => audio.play(), timeout);
      alert("Alarm set");
    }
  }
}

function clearAlarm() {
  audio.pause();
  if (alarmTimeout) {
    clearTimeout(alarmTimeout);
    alert("Alarm cleared");
  }

function snooze(){
    
}

}

setInterval(updateTime, 1000);


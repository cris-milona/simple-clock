function clockTicking() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let period = 'AM';
  const clock = document.querySelector('#clock');

  if (hours === 0) {
    hours = 12;
  }
  if (hours > 12) {
    hours = hours - 12;
    period = 'PM';
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (seconds < 10) {
    seconds = `0${seconds}`;
  }
  clock.innerText = `${hours} : ${minutes} : ${seconds} ${period}`;
}
setInterval(clockTicking, 1000);

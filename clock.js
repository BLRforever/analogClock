const clock = document.getElementById("clock");
function updateClock() {
  const currentTime = new Date();
  const timeString = currentTime.toLocaleTimeString();
  clock.innerText = timeString;
}
setInterval(updateClock, 1000);
// console.log(timeString);

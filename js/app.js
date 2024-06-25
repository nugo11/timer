const play = document.getElementById("play");
const pause = document.getElementById("pause");
const stopi = document.getElementById("stop");
const reset = document.getElementById("reset");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const minsec = document.getElementById("minsec");

let timer;
let milliseconds = 0;
let seconds = 0;
let minutes = 0;

function updateDisplay() {
  minsec.textContent = String(milliseconds).padStart(2, "0");
  sec.textContent = String(seconds).padStart(2, "0");
  min.textContent = String(minutes).padStart(2, "0");
}

function startTimer() {
  if (!timer) {
    timer = setInterval(() => {
      milliseconds++;
      if (milliseconds > 99) {
        milliseconds = 0;
        seconds++;
      }
      if (seconds > 59) {
        seconds = 0;
        minutes++;
      }
      updateDisplay();
    }, 10);
    play.style.display = "none";
    pause.style.display = "block";
  }
}

function pauseTimer() {
  play.style.display = "block";
  pause.style.display = "none";
  clearInterval(timer);
  timer = null;
}

function stopTimer() {
  play.style.display = "block";
  pause.style.display = "none";
  clearInterval(timer);
  timer = null;
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  updateDisplay();
}

function resetTimer() {
  stopTimer();
  startTimer();
}

play.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
stopi.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);

updateDisplay();

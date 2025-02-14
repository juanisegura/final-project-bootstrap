const video = document.querySelector('video');
const playButton = document.getElementById("play");
const pauseButton = document.getElementById("pause");
const showTimeElement = document.getElementById('showTime');
const nav = document.querySelector("nav");
const temaMenu = document.querySelector(".tema");
const body = document.querySelector("body");

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
};

let timeProgression;

navChange();

playButton.addEventListener('click', () => {
  video.play();
  timeProgression = setInterval(() => {
    showTimeElement.innerHTML = ` ${formatTime(video.currentTime)}`;
  }, 1000);
});

pauseButton.addEventListener('click', () => {
  video.pause();
  clearInterval(timeProgression);
});

function toggleTemaMenu() {
  temaMenu.classList.toggle("tema-block");
}

function changeBodyClass(className) {
  body.classList.remove(...body.classList);
  body.classList.add(className);
}

function desptemaDia() {
  changeBodyClass("body-day");
}

function temaNoche() {
  changeBodyClass("body-night");
}

function navChange() {
  if (window.scrollY > window.innerHeight * 0.35) {
    nav.classList.add("fondoNav");
  } else {
    nav.classList.remove("fondoNav");
  }
}

setTimeout(() => {
  showTimeElement.innerHTML = ` Duracion video  04:41`;
}, 100);
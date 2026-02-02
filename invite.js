const events = {
  wedding: {
    title: "Wedding",
    video: "assets/wedding/video.mp4",
    audio: "assets/wedding/music.mp3",
    poster: "assets/wedding/bg.jpg",
    map: "https://maps.google.com",
    calendar: "#"
  },
  reception: {
    title: "Reception",
    video: "assets/reception/video.mp4",
    audio: "assets/reception/music.mp3",
    poster: "assets/reception/bg.jpg",
    map: "https://maps.google.com",
    calendar: "#"
  }
};

const isIOS =
  /iPad|iPhone|iPod/.test(navigator.userAgent) ||
  (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);

const params = new URLSearchParams(window.location.search);
const eventKey = params.get("event");

if (!events[eventKey]) {
  window.location.href = "index.html";
}

const data = events[eventKey];

const video = document.getElementById("video");
const audio = document.getElementById("audio");
const overlay = document.getElementById("overlay");
const openBtn = document.getElementById("openBtn");
const mapBtn = document.getElementById("mapBtn");
const calendarBtn = document.getElementById("calendarBtn");
const soundToggle = document.getElementById("soundToggle");

openBtn.textContent = `Tap to Open ${data.title} ✨`;

video.src = data.video;
video.poster = data.poster;
video.muted = true;
video.playsInline = true;

audio.src = data.audio;

mapBtn.href = data.map;
calendarBtn.href = data.calendar;

let soundOn = true;

function startInvite() {
  overlay.style.display = "none";
  video.muted = false;
  video.play().catch(() => {});
  audio.play().catch(() => {});
}

if (isIOS) {
  openBtn.addEventListener("click", startInvite, { once: true });
} else {
  overlay.style.display = "none";
  setTimeout(startInvite, 300);
}

soundToggle.addEventListener("click", () => {
  soundOn = !soundOn;
  audio.muted = !soundOn;
  soundToggle.textContent = soundOn ? "🔊" : "🔇";
});

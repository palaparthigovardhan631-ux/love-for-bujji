/* Music play on first tap */
const music = document.getElementById("bgm");
document.body.addEventListener("click", () => {
  music.play();
}, { once: true });

/* Slideshow */
const photos = ["photo1.jpg.jpeg", "photo2.jpg.jpeg", "photo3.jpg.jpeg"];
let i = 0;
const slide = document.getElementById("slide");
const video = document.getElementById("video");
const proposal = document.getElementById("proposal");

const interval = setInterval(() => {
  i++;
  if (i >= photos.length) {
    clearInterval(interval);
    setTimeout(showProposal, 2000);
  } else {
    slide.src = photos[i];
  }
}, 4000);

/* Proposal */
function showProposal() {
  video.style.display = "none";
  proposal.style.display = "flex";
}

/* YES button */
function yes() {
  alert("She said YES 💍❤️");
}

/* Surprise message */
document.body.addEventListener("dblclick", () => {
  document.getElementById("popup").style.display = "flex";
});

function closeMsg() {
  document.getElementById("popup").style.display = "none";
}

/* Since we met counter */
const startDate = new Date("2023-01-01"); // CHANGE THIS
setInterval(() => {
  const now = new Date();
  const diff = now - startDate;
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.getElementById("counter").innerText =
    `Together for ${days} days ❤️`;
}, 1000);

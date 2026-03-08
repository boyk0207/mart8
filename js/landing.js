const heartsContainer = document.getElementById("hearts");
const loveBtn = document.getElementById("loveBtn");
const storyBtn = document.getElementById("storyBtn");
const messageBox = document.getElementById("messageBox");

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 4 + Math.random() * 4 + "s";
  heart.style.fontSize = 14 + Math.random() * 24 + "px";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 8000);
}

setInterval(createHeart, 400);

loveBtn.addEventListener("click", () => {
  window.location.href = "flower.html";
});
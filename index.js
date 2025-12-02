// FLOATING HEARTS GENERATOR
function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = 3 + Math.random() * 3 + "s";

  document.getElementById("hearts-container").appendChild(heart);

  setTimeout(() => heart.remove(), 6000);
}
setInterval(createHeart, 500);

// UNLOCK BIRTHDATE
document.getElementById("unlockBtn").addEventListener("click", () => {
  const bday = document.getElementById("bday").value.trim();

  if (bday === "" || bday.length < 8) {
    alert("Te rog introdu o dată validă ❤️");
    return;
  }

  unlockSection.style.display = "none";
  candleSection.style.display = "block";
});

// BLOW CANDLE
document.getElementById("blowBtn").addEventListener("click", () => {
  candleSection.style.display = "none";
  reasonsSection.style.display = "block";

  // show memories after 1s
  setTimeout(() => {
    memoriesSection.style.display = "block";
  }, 1000);
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".image-modal .close");

  // Deschidere modal la click pe orice imagine
  document.querySelectorAll(".memories-grid img").forEach((img) => {
    img.addEventListener("click", () => {
      modal.style.display = "block";
      modalImg.src = img.src;
    });
  });

  // Inchidere modal la click pe X
  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  // Inchidere modal la click in afara pozei
  modal.onclick = function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };

  // Show Luna section după 1 sec de la memories
  setTimeout(() => {
    lunaSection.style.display = "block";
  }, 1000);

  // show love letter after 2s
  setTimeout(() => {
    loveLetterSection.style.display = "block";
  }, 2000);
});

// LOVE LETTER OPENING
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");

envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.classList.remove("hidden");
});

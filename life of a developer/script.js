const title = document.querySelector(".title");

window.addEventListener("load", () => {
  title.style.opacity = 0;
  title.style.transform = "translateY(50px)";

  setTimeout(() => {
    title.style.transition = "all 1s ease";
    title.style.opacity = 1;
    title.style.transform = "translateY(0)";
  }, 300);
});
const tags = document.querySelectorAll(".tag");
const info = document.querySelector(".tag-info");

tags.forEach(tag => {
  tag.addEventListener("mouseenter", () => {
    info.textContent = tag.getAttribute("data-info");
  });

  tag.addEventListener("mouseleave", () => {
    info.textContent = "Hover on a tag to learn";
  });
});
gsap.from(".html-title", {
  opacity: 0,
  y: 100,
  duration: 1,
  scrollTrigger: {
    trigger: ".html",
    start: "top 80%"
  }
});
const button = document.querySelector(".fix-btn");
const errors = document.querySelector(".errors");

button.addEventListener("click", () => {
  const newError = document.createElement("p");
  newError.classList.add("error");
  newError.textContent = "New Error: Something else broke 😭";
  errors.appendChild(newError);
});
button.addEventListener("click", () => {
  document.querySelector(".debug").classList.add("shake");

  setTimeout(() => {
    document.querySelector(".debug").classList.remove("shake");
  }, 300);
});
gsap.from(".debug-title", {
  opacity: 0,
  y: 100,
  duration: 1,
  scrollTrigger: {
    trigger: ".debug",
    start: "top 80%"
  }
});
let timeLeft = 10;
const timer = document.getElementById("timer");
const stressFill = document.querySelector(".stress-fill");

const countdown = setInterval(() => {
  timeLeft--;
  timer.textContent = timeLeft;

  stressFill.style.width = (timeLeft * 10) + "%";

  if (timeLeft <= 0) {
    clearInterval(countdown);
    timer.textContent = "TIME UP 😭";
  }
}, 1000);
const workBtn = document.querySelector(".work-btn");

workBtn.addEventListener("click", () => {
  if (timeLeft < 10) {
    timeLeft++;
  }
});
gsap.from(".deadline-title", {
  opacity: 0,
  y: 100,
  duration: 1,
  scrollTrigger: {
    trigger: ".deadline",
    start: "top 80%"
  }
});
const coffeeBtn = document.querySelector(".coffee-btn");
const energyFill = document.querySelector(".energy-fill");

let energy = 20;

coffeeBtn.addEventListener("click", () => {
  if (energy < 100) {
    energy += 10;
    energyFill.style.width = energy + "%";
  }
});

const restartBtn = document.querySelector(".restart-btn");

restartBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
gsap.from(".coffee-title", {
  opacity: 0,
  y: 100,
  duration: 1,
  scrollTrigger: {
    trigger: ".coffee",
    start: "top 80%"
  }
});

gsap.from(".end-title", {
  opacity: 0,
  y: 100,
  duration: 1,
  scrollTrigger: {
    trigger: ".end",
    start: "top 80%"
  }
});
window.addEventListener("scroll", () => {
  const scrollTop = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (scrollTop / height) * 100;
  document.querySelector(".progress-bar").style.width = scrolled + "%";
});
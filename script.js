const openBtn = document.getElementById("openBtn");
const hero = document.querySelector(".hero");
const card = document.querySelector(".card");
const music = document.getElementById("music");

function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

function createPetal() {
    const petal = document.createElement("div");
    petal.className = "petal";
    petal.innerHTML = "🌸";
    petal.style.left = Math.random() * window.innerWidth + "px";
    document.body.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, 6000);
}

openBtn.addEventListener("click", () => {

    const flap = document.querySelector(".flap");
    flap.style.transform = "rotateX(180deg)";

    setTimeout(() => {

        hero.style.display = "none";

        card.style.display = "block";
        card.style.opacity = "0";
        card.style.transform = "translateY(50px)";

        setTimeout(() => {
            card.style.transition = "all 0.8s ease";
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, 50);

        if (music) {
            music.play().catch(() => {});
        }

        setInterval(createHeart, 700);
        setInterval(createPetal, 500);
        setInterval(createSparkle, 400);

    }, 800);

});

        setInterval(createHeart, 700);
        setInterval(createPetal, 500);
        setInterval(createSparkle, 400);
    }, 800);

});

const targetDate = new Date("2026-09-04T19:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetDate - now;

    if (distance <= 0) return;

    document.getElementById("days").textContent =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    document.getElementById("hours").textContent =
        Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    document.getElementById("minutes").textContent =
        Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById("seconds").textContent =
        Math.floor((distance % (1000 * 60)) / 1000);
}

updateCountdown();
setInterval(updateCountdown, 1000);
function createSparkle() {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.innerHTML = "✨";

    sparkle.style.left = Math.random() * window.innerWidth + "px";
    sparkle.style.top = Math.random() * window.innerHeight + "px";

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 3000);
}

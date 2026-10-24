```javascript
// ========================================
// DRISHYAPRIYA'S MAGICAL BIRTHDAY WEBSITE
// ========================================


// 1. LIVE BIRTHDAY COUNTDOWN
// India Standard Time = UTC + 5 hours 30 minutes.

const birthdayDate = new Date("2026-10-26T00:00:00+05:30");

const daysElement = document.getElementById("days");
const hoursElement = document.getElementById("hours");
const minutesElement = document.getElementById("minutes");
const secondsElement = document.getElementById("seconds");

const countdownTimer = document.getElementById("countdown-timer");
const birthdayMessage = document.getElementById("birthday-message");

function updateCountdown() {
    const now = Date.now();
    const difference = birthdayDate.getTime() - now;

    if (difference <= 0) {
        countdownTimer.hidden = true;
        birthdayMessage.hidden = false;

        birthdayMessage.textContent =
            "🎉 HAPPY 2ND BIRTHDAY, DRISHYAPRIYA! 🎂💖";

        return;
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
        (difference / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (difference / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (difference / 1000) % 60
    );

    daysElement.textContent = String(days).padStart(2, "0");
    hoursElement.textContent = String(hours).padStart(2, "0");
    minutesElement.textContent = String(minutes).padStart(2, "0");
    secondsElement.textContent = String(seconds).padStart(2, "0");
}

updateCountdown();
setInterval(updateCountdown, 1000);


// 2. SURPRISE LETTER

const openLetterButton = document.getElementById("open-letter");
const closeLetterButton = document.getElementById("close-letter");
const letterContent = document.getElementById("letter-content");
const envelope = document.getElementById("envelope");

openLetterButton.addEventListener("click", () => {
    letterContent.hidden = false;
    envelope.hidden = true;
    openLetterButton.hidden = true;

    createConfetti(70);

    letterContent.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });
});

closeLetterButton.addEventListener("click", () => {
    letterContent.hidden = true;
    envelope.hidden = false;
    openLetterButton.hidden = false;

    envelope.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
});


// 3. BIRTHDAY MUSIC PLAYER

const audio = document.getElementById("birthday-audio");
const musicButton = document.getElementById("music-toggle");
const musicStatus = document.getElementById("music-status");
const musicIcon = document.getElementById("music-icon");
const volumeSlider = document.getElementById("volume");

audio.volume = Number(volumeSlider.value);

musicButton.addEventListener("click", async () => {
    if (audio.paused) {
        try {
            await audio.play();

            musicButton.textContent = "⏸ Pause Music";
            musicStatus.textContent = "Playing a little birthday melody 🎶";
            musicIcon.textContent = "🎶";
        } catch (error) {
            musicStatus.textContent =
                "Music couldn't play. Check that music/birthday.mp3 exists.";
        }
    } else {
        audio.pause();

        musicButton.textContent = "▶ Play Music";
        musicStatus.textContent = "Music paused 💗";
        musicIcon.textContent = "🎵";
    }
});

audio.addEventListener("ended", () => {
    musicButton.textContent = "▶ Play Music";
    musicStatus.textContent = "Song finished. Play it again? 🎶";
    musicIcon.textContent = "🎵";
});

audio.addEventListener("error", () => {
    musicStatus.textContent =
        "Add your music file at music/birthday.mp3 to play a song.";
});

volumeSlider.addEventListener("input", () => {
    audio.volume = Number(volumeSlider.value);
});


// 4. FLOATING HEARTS AND STARS

const decorationsContainer = document.getElementById(
    "floating-decorations"
);

const decorations = ["💖", "⭐", "🌸", "💕", "✨", "🧸"];

const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

function createFloatingDecoration() {
    if (reducedMotion) return;

    const item = document.createElement("span");

    item.className = "floating-item";

    item.textContent = decorations[
        Math.floor(Math.random() * decorations.length)
    ];

    item.style.left = Math.random() * 100 + "vw";
    item.style.fontSize = (16 + Math.random() * 22) + "px";
    item.style.animationDuration = (7 + Math.random() * 8) + "s";

    decorationsContainer.appendChild(item);

    setTimeout(() => {
        item.remove();
    }, 16000);
}

if (!reducedMotion) {
    setInterval(createFloatingDecoration, 1300);
}


// 5. CONFETTI CELEBRATION

function createConfetti(amount = 60) {
    const confettiSymbols = ["🎉", "💖", "✨", "🎊", "🌸", "⭐"];

    for (let i = 0; i < amount; i++) {
        const piece = document.createElement("span");

        piece.className = "confetti-piece";

        piece.textContent = confettiSymbols[
            Math.floor(Math.random() * confettiSymbols.length)
        ];

        piece.style.left = Math.random() * 100 + "vw";
        piece.style.fontSize = (14 + Math.random() * 18) + "px";
        piece.style.animationDuration = (2 + Math.random() * 2) + "s";
        piece.style.animationDelay = Math.random() * 0.8 + "s";

        document.body.appendChild(piece);

        setTimeout(() => {
            piece.remove();
        }, 5000);
    }
}


// 6. CELEBRATE AGAIN BUTTON

const celebrateButton = document.getElementById("celebrate-again");

celebrateButton.addEventListener("click", () => {
    createConfetti(100);

    celebrateButton.textContent = "Yay! More Birthday Magic! 💖";

    setTimeout(() => {
        celebrateButton.textContent = "Celebrate Again 🎉";
    }, 2500);
});

console.log("Drishyapriya's birthday website is ready! 🎀");
```

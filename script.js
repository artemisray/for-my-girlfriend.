
const button = document.getElementById("loveButton");
const letter = document.getElementById("letter");

button.addEventListener("click", function () {
    letter.classList.toggle("hidden");

    if (letter.classList.contains("hidden")) {
        button.textContent = "babe... open your letter 💌";
    } else {
        button.textContent = "Close your letter 💗";
    }
});

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

musicButton.addEventListener("click", async () => {
    if (music.paused) {
        try {
            await music.play();
            musicButton.textContent = "❚❚ Pause our song 💗";
        } catch (error) {
            musicButton.textContent = "Try playing the song again 🎵";
        }
    } else {
        music.pause();
        musicButton.textContent = "▶ Play our song 💗";
    }
});

music.addEventListener("ended", () => {
    musicButton.textContent = "▶ Play our song 💗";
});
const galleryPhotos = document.querySelectorAll(".gallery img");
const photoViewer = document.getElementById("photoViewer");
const expandedPhoto = document.getElementById("expandedPhoto");
const closeViewer = document.getElementById("closeViewer");console.log("Gallery photos:", galleryPhotos.length);
console.log("Photo viewer found:", photoViewer);

galleryPhotos.forEach(function(photo) {
    photo.style.cursor = "pointer";

    photo.addEventListener("click", function() {
        expandedPhoto.src = photo.src;
        expandedPhoto.alt = photo.alt;
        photoViewer.style.display = "flex";
    });
});

closeViewer.addEventListener("click", function() {
    photoViewer.style.display = "none";
});

photoViewer.addEventListener("click", function(event) {
    if (event.target === photoViewer) {
        photoViewer.style.display = "none";
    }
});
/* Floating hearts for Biverly 💗 */
function createFloatingHeart() {
    const heart = document.createElement("span");

    heart.className = "floating-heart";

    const hearts = ["💗", "💕", "💖", "💘", "❤️", "💞"];
    heart.textContent = hearts[
        Math.floor(Math.random() * hearts.length)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (16 + Math.random() * 20) + "px";

    const duration = 5 + Math.random() * 4;
    heart.style.animationDuration = duration + "s";

    document.body.appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, duration * 1000);
}

/* Create a new heart every 900 milliseconds */
setInterval(createFloatingHeart, 900);



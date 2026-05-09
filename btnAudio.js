const btn = document.getElementById("btnAudio");

const audio = document.getElementById("motivacao");

btn.addEventListener("click", () => {
    audio.play();
});
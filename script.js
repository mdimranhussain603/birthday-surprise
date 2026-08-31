function openSurprise() {
    window.location.href = "birthday.html";
}
const params = new URLSearchParams(window.location.search);

const name = params.get("name");

if (name) {

    const nameElement =
        document.getElementById("name");

    if (nameElement) {
        nameElement.innerText =
            "Happy Birthday " + name + " ❤️";
    }


    const personalMessage =
        document.getElementById("personalMessage");

    if (personalMessage) {
        personalMessage.innerText =
            "Dear " + name +
            ", may your special day be filled with happiness, love, laughter and beautiful memories. May all your dreams come true and may you always keep smiling! ✨";
    }

}
function createConfetti() {

    const container =
        document.getElementById("confetti-container");

    if (!container) {
        return;
    }

    for (let i = 0; i < 80; i++) {

        const confetti =
            document.createElement("div");

        confetti.classList.add("confetti");

        confetti.style.left =
            Math.random() * 100 + "%";

        confetti.style.animationDelay =
            Math.random() * 3 + "s";

        confetti.style.animationDuration =
            2 + Math.random() * 3 + "s";

        container.appendChild(confetti);
    }
}

createConfetti();
function makeWish() {

    const message =
        document.getElementById("wishMessage");

    message.innerText =
        "✨ May your biggest wishes come true! ✨";

}
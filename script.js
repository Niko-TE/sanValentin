const messages = [
    "Segurisisisisma??",
    "Muy segura ojos de Náyade??",
    "Amor tu estas segura?",
    "Porfavor, princesa",
    "Estas muy lejos pero di que si!",
    "Me pongo triste ya di que si",
    "Ya bueno mal ya no quiero nada :P",
    "Mentiri estas lejos pero di que SI ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}
const fortunes = [
    { text: "Don't count on it.", color: "green" },
    { text: "My sources say no.", color: "magenta" },
    { text: "Outlook good", color: "blue" },
    { text: "It is certain.", color: "purple" },
    { text: "Reply hazy, try again", color: "red" },
    { text: "Cannot predict now.", color: "orange" }
];

function pickFortune() {
    // Corrected function names and syntax
    const randomPick = Math.floor(Math.random() * fortunes.length);
    const yourFortune = fortunes[randomPick];

    const showFortune = document.getElementById('yourFortune');
    showFortune.innerHTML = yourFortune.text; // Corrected casing
    showFortune.style.color = yourFortune.color;
}
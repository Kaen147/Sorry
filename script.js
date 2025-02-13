let clickCount = 0;
const noButton = document.getElementById("noButton");
const question = document.getElementById("question");
const image = document.getElementById("image");

// Array of texts and images
const texts = [
    "Why man lovee? 😢",
    "Sorry na lovee plsss 🥺",
    "Ayaw e no lovee plss 😭",
    "Love friends na ta plss...",
    "I won’t stop asking! 😤",
    "You're so mean! 😭",
    "Fine, I'll stop asking... 😞"
];

const images = [
    "sorry1.gif",
    "sorry2.gif",
    "sorry3.gif",
    "sorry4.gif",
    "angry.gif",
    "sorry5.gif",
    "sorry6.gif"
];



noButton.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent page refresh

    if (clickCount < texts.length) {
        question.innerText = texts[clickCount]; // Change the text
        image.src = images[clickCount]; // Change the image
        clickCount++; // Move to next text and image
    } else {
        question.innerText = "Okay... I give up. 😔";
        noButton.style.display = "none"; // Hide "No" button
    }
});

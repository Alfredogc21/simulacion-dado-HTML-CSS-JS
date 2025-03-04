document.addEventListener("DOMContentLoaded", () => {
    const diceFace = document.getElementById("diceFace");
    const rollButton = document.getElementById("rollButton");

    // Caras del dado con emojis
    const diceFaces = ["⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

    rollButton.addEventListener("click", () => {
        // Animación de giro
        diceFace.style.transform = "rotate(360deg)";
        
        setTimeout(() => {
            diceFace.style.transform = "rotate(0deg)";
            const randomIndex = Math.floor(Math.random() * 6);
            diceFace.textContent = diceFaces[randomIndex];
        }, 300);
    });
});

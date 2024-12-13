// rain.js

document.addEventListener("DOMContentLoaded", () => {
    const rainContainer = document.querySelector('.rain');
    const numberOfDrops = 20; // Adjust to control # of raindrops

    for (let i = 0; i < numberOfDrops; i++) {
        const drop = document.createElement('div');
        drop.classList.add('raindrop');
        
        // Random horizontal position (0% to 100%)
        drop.style.left = `${Math.random() * 100}vw`;
        
        // Random animation duration between 0.5s and 1.5s
        drop.style.animationDuration = `${Math.random() * 1 + 0.5}s`;
        
        // Random animation delay between -2s and 0s
        drop.style.animationDelay = `${Math.random() * -2}s`;
        
        // Optional: Random opacity for variation
        drop.style.opacity = `${Math.random() * 0.5 + 0.3}`;
        
        rainContainer.appendChild(drop);
    }
});

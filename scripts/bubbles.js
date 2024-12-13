document.addEventListener('DOMContentLoaded', () => {
    const container = document.createElement('div');
    container.className = 'bubble-container';
    document.body.appendChild(container);

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        
        // Random size between 5px and 20px
        const size = Math.random() * 15 + 5;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        
        // Random horizontal position
        bubble.style.left = `${Math.random() * 100}%`;
        
        // Random animation duration
        bubble.style.animationDuration = `${Math.random() * 2 + 3}s`; 
        
        container.appendChild(bubble);
        
        // Remove bubble after animation
        bubble.addEventListener('animationend', () => {
            bubble.remove();
        });
    }

    // Create new bubble every 1.5 seconds 
    setInterval(createBubble, 1500);
});

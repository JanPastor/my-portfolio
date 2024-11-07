// lightning.js

document.addEventListener("DOMContentLoaded", () => {
    const lightning = document.querySelector('.lightning');

    function triggerLightning() {
        // Activate lightning
        lightning.classList.add('active');

        // Deactivate after the flash duration
        setTimeout(() => {
            lightning.classList.remove('active');
        }, 200); // Duration matches the CSS animation duration

        // Schedule next lightning flash
        const nextFlash = Math.random() * 5000 + 3000; // 3s to 8s
        setTimeout(triggerLightning, nextFlash);
    }

    // Initial lightning flash
    const initialFlash = Math.random() * 5000 + 3000; // 3s to 8s
    setTimeout(triggerLightning, initialFlash);
});

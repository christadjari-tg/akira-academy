// Cyberpunk Visual Effects

document.addEventListener('DOMContentLoaded', () => {
    // Add custom cursor glow or mouse tracking effects here if needed
    // For now, let's keep it simple and performant
    
    // Add random glitch effect to specific elements
    setInterval(() => {
        const glitchElements = document.querySelectorAll('.random-glitch');
        if (glitchElements.length > 0) {
            const randomEl = glitchElements[Math.floor(Math.random() * glitchElements.length)];
            randomEl.classList.add('glitch-effect');
            randomEl.setAttribute('data-text', randomEl.innerText);
            
            setTimeout(() => {
                randomEl.classList.remove('glitch-effect');
            }, 500); // Glitch lasts 500ms
        }
    }, 3000); // Every 3 seconds
});

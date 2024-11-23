// Select the glow and trail elements
const cursorGlow = document.querySelector('.cursor-glow');
const cursorTrail = document.querySelector('.cursor-trail');

// Smooth cursor-following logic
window.addEventListener('mousemove', (e) => {
    const { clientX: x, clientY: y } = e;

    // Update the position of the primary glow
    cursorGlow.style.left = `${x}px`;
    cursorGlow.style.top = `${y}px`;

    // Smooth trailing effect
    setTimeout(() => {
        cursorTrail.style.left = `${x}px`;
        cursorTrail.style.top = `${y}px`;
    }, 100); // Adjust delay for trailing effect
});


let lastMove = 0;
window.addEventListener('mousemove', (e) => {
    if (Date.now() - lastMove > 16) { // 16ms = ~60fps
        const { clientX: x, clientY: y } = e;
        cursorGlow.style.left = `${x}px`;
        cursorGlow.style.top = `${y}px`;
        setTimeout(() => {
            cursorTrail.style.left = `${x}px`;
            cursorTrail.style.top = `${y}px`;
        }, 100);
        lastMove = Date.now();
    }
});
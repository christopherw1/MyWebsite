// Example: Console log when page loads
console.log("Website loaded!");

// Example: Alert when clicking a link (just for demo)
document.querySelectorAll('.links a').forEach(link => {
    link.addEventListener('click', () => {
        console.log(`Going to: ${link.href}`);
    });
});

const belt = document.querySelector('.conveyor-belt');
belt.addEventListener('mouseenter', () => {
    belt.style.animationPlayState = 'paused';
});
belt.addEventListener('mouseleave', () => {
    belt.style.animationPlayState = 'running';
});
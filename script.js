const buttons = document.querySelectorAll('.button');
const orbitRadius = 150; // Radius for orbiting buttons

function updateOrbit(event) {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const distance = Math.sqrt((mouseX - centerX) ** 2 + (mouseY - centerY) ** 2);
    const maxDistance = 300;
    const speedFactor = Math.max(0.1, distance / maxDistance);

    buttons.forEach((button, index) => {
        const angle = (index / buttons.length) * 2 * Math.PI;
        const x = centerX + orbitRadius * Math.cos(angle) * speedFactor;
        const y = centerY + orbitRadius * Math.sin(angle) * speedFactor;

        button.style.transform = `translate(${x - button.offsetWidth / 2}px, ${y - button.offsetHeight / 2}px)`;
    });
}

document.addEventListener('mousemove', updateOrbit);

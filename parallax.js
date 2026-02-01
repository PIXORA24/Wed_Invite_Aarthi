const cards = document.querySelectorAll(".invite-card");

if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientation", (e) => {
    const x = e.gamma; // left-right
    const y = e.beta;  // front-back

    if (x === null || y === null) return;

    const rotateX = Math.max(-6, Math.min(6, y / 10));
    const rotateY = Math.max(-6, Math.min(6, x / 10));

    cards.forEach(card => {
      card.style.transform = `
        perspective(900px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.03)
      `;
    });
  });
}

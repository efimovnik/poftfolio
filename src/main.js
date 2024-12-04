import "./style.css"

document.addEventListener("DOMContentLoaded", () => {
  const glowEffect = document.getElementById("glow-effect");
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav a');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.querySelector('.nav-indicator').classList.remove('active'));

        const activeLink = document.querySelector(`.nav a[href="#${entry.target.id}"]`);
        if (activeLink) {
          activeLink.querySelector('.nav-indicator').classList.add('active');
        }
      }
    });
  }, observerOptions);

  if (!glowEffect) {
    console.error("Glow effect element not found!");
    return;
  }

  document.addEventListener("mousemove", (event) => {
    // Calculate mouse position relative to the entire page
    const x = event.clientX + window.scrollX;
    const y = event.clientY + window.scrollY;

    // Update the radial gradient's position
    glowEffect.style.background = `radial-gradient(600px at ${x}px ${y}px, rgba(29, 78, 216, 0.15), transparent 80%)`;
  });

  document.addEventListener("mouseleave", () => {
    // Optionally fade the glow back to the center
    glowEffect.style.background = `radial-gradient(600px at 50% 50%, rgba(29, 78, 216, 0.15), transparent 80%)`;
  });

  sections.forEach((section) => observer.observe(section));


  
});
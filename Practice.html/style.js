// Fade-in animation for sections
const sections = document.querySelectorAll("section");

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach((sec) => {
    const boxTop = sec.getBoundingClientRect().top;
    if (boxTop < triggerBottom) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
};

// Initial styles for animations
sections.forEach((sec) => {
  sec.style.opacity = 0;
  sec.style.transform = "translateY(50px)";
  sec.style.transition = "all 1s ease";
});

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


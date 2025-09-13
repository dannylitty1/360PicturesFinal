document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".about__content");

    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible"); // Add the visible class
                } else {
                    entry.target.classList.remove("visible"); // Remove the visible class
                }
            });
        },
        { threshold: 0.2 } // Trigger when 20% of the section is visible
    );

    sections.forEach(section => observer.observe(section));
});
document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute("href"));
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: "smooth"
            });
        });
    });

    // Opción adicional: resaltar la sección activa al hacer scroll
    const sections = document.querySelectorAll(".section");
    window.addEventListener("scroll", function() {
        let currentSection = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 50;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    });
});

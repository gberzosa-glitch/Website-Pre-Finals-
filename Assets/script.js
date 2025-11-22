// Custom JS for your website
document.addEventListener("DOMContentLoaded", () => {
    console.log("Generative AI website ready!");

    // Example: highlight active nav link
    const links = document.querySelectorAll(".nav-link");
    links.forEach(link => {
        link.addEventListener("click", () => {
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Example: alert button click
    const buttons = document.querySelectorAll(".btn-primary");
    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            console.log(`${btn.textContent} clicked`);
        });
    });
});

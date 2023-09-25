// script.js
document.addEventListener("DOMContentLoaded", function () {
    const pageContainer = document.getElementById("pageContainer");

    function navigateToPage(targetPage) {
        pageContainer.innerHTML = ""; // Clear the container

        // Load and render the Handlebars template
        const source = document.getElementById(targetPage).innerHTML;
        const template = Handlebars.compile(source);
        const html = template();
        
        pageContainer.innerHTML = html;

        // Apply a smooth fade-in effect
        const targetElement = document.getElementById(targetPage);
        targetElement.style.opacity = "0";
        
        setTimeout(() => {
            targetElement.style.opacity = "1";
        }, 50); // Adjust this timing as needed
    }

    // Handle page navigation
    const links = document.querySelectorAll("a");
    links.forEach((link) => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetPageId = this.getAttribute("href");
            navigateToPage(targetPageId);
        });
    });

    // Initially display the first page
    navigateToPage("page1");
});

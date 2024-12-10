// Placeholder for future JavaScript functionality
// For example: smooth scrolling, form validation, etc.

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav ul li a');
    
    for (const link of links) {
        link.addEventListener('click', smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    }
    document.querySelector("#mob").addEventListener("click", ()=>{
        window.location.href = "tel:9699188726";
    })
    
});

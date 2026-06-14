document.addEventListener('DOMContentLoaded', () => {
    console.log('Sokin Diyor v5 - Mobile Only Version Loaded');
    
    // Add smooth scroll for anchor links if any
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // Example: Function to show an alert when the Explore button is clicked
    document.querySelector('.hero .button').addEventListener('click', () => {
        alert('Explore more teachings of Buddha');
    });

    // Scroll to top when clicking on the Home link
    document.querySelector('nav ul li a[href="index.html"]').addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

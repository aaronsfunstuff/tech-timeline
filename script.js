document.addEventListener('DOMContentLoaded', () => {
    const backToTopButton = document.getElementById('back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    const events = document.querySelectorAll('.timeline-event');
    events.forEach(event => {
        event.addEventListener('click', () => {
            event.classList.toggle('active');
            alert(event.querySelector('h3').innerText);
        });
    });
});

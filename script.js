document.addEventListener('DOMContentLoaded', () => {
    const events = document.querySelectorAll('.timeline-event');
    events.forEach(event => {
        event.addEventListener('click', () => {
            event.classList.toggle('active');
            alert(event.querySelector('h2').innerText);
        });
    });
});

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

    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
            scrollToItem(item);
        });
    });

    function scrollToItem(item) {
        const offsetTop = item.offsetTop - 100; // Adjust as needed for header height or other fixed elements
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
});

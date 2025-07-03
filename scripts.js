document.addEventListener("DOMContentLoaded", () => {
    const animateElements = document.querySelectorAll('.animate');

    const isInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (rect.top >= 0 && rect.bottom <= window.innerHeight);
    }

    const onScroll = () => {
        animateElements.forEach((el) => {
            if (isInViewport(el)) {
                el.classList.add('in-view');
            }
        });
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // Initial check
});

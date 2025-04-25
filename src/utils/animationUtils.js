// Create a new file for animation utilities

export const setupScrollAnimations = () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.15 // Trigger when 15% of the element is visible
    });

    animatedElements.forEach(el => {
        observer.observe(el);
    });

    return () => {
        animatedElements.forEach(el => {
            observer.unobserve(el);
        });
    };
}; 
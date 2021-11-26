const observer = new IntersectionObserver(showHeadings); // New Intersection object
const elements = document.querySelectorAll('main > section');

elements.forEach(element => {
    observer.observe(element);
})

function showHeadings(entries, observer) {
    entries.forEach(entry => {
        const targetClass = entry.target.classList;
        if (entry.isIntersecting) {
            targetClass.add('observed')
        } else {
            targetClass.remove('observed')
        }
    });
};
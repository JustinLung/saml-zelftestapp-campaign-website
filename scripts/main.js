const observer = new IntersectionObserver(showHeadings); // New Intersection object
const elements = document.querySelectorAll('main > section');

elements.forEach(element => {
    observer.observe(element);
})

function showHeadings(entries, observer) {
    entries.forEach(entry => {
        const targetClass = entry.target.classList;
        if (entry.isIntersecting) targetClass.add('observed')
    });
};
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const Cross = document.querySelector(".cross");

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", true)
    } else if (visibility === "true") {
        primaryNav.setAttribute("data-visible", false)
    }
});

document.getElementById("test").onclick = function() {closeNav()};

function closeNav() {
    Cross.addEventListener('click', () => {
        const visibility = primaryNav.getAttribute("data-visible");

        if (visibility === "true") {
            primaryNav.setAttribute("data-visible", false)
        }
    });
}
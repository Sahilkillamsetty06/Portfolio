
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");
// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
        });
    });
});


function openModal(id) {
    document.getElementById(id).style.display = 'flex';
}

function closeModal(id) {
    document.getElementById(id).style.display = 'none';
}


// // Dynamic greeting based on the time of day
// window.onload = () => {
//     const hours = new Date().getHours();
//     let greeting = "Welcome";
//     if (hours < 12) greeting = "Good Morning";
//     else if (hours < 18) greeting = "Good Afternoon";
//     else greeting = "Good Evening";

//     alert(`${greeting}! Explore my portfolio.`);
// };

function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const arrow = header.querySelector(".arrow");

    if (content.style.display === "none") {
        content.style.display = "block";
        arrow.innerHTML = "&#9650;"; // Up Arrow
    } else {
        content.style.display = "none";
        arrow.innerHTML = "&#9660;"; // Down Arrow
    }
}

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    document.body.classList.toggle("light");
});
function openModal(id) {
    document.getElementById(id).style.display = "flex";
}

function closeModal(id) {
    document.getElementById(id).style.display = "none";
}
const sectionsToAnimate = document.querySelectorAll("section");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { threshold: 0.5 }
);

sectionsToAnimate.forEach((section) => observer.observe(section));

const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});



document.addEventListener("DOMContentLoaded", function () {
    const progressCircles = document.querySelectorAll(".circular-progress");

    progressCircles.forEach(circle => {
        const percentage = circle.getAttribute("data-percentage");
        const progress = circle.querySelector(".progress");
        const offset = 326 - (percentage / 100) * 326;
        
        progress.style.strokeDashoffset = offset;
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const tabButtons = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".content");

    tabButtons.forEach(button => {
        button.addEventListener("click", function () {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove("active"));
            contents.forEach(content => content.classList.remove("active"));

            // Add active class to the clicked button and the corresponding content
            button.classList.add("active");
            const target = button.getAttribute("data-target");
            document.getElementById(target).classList.add("active");
        });
    });
});









    const lightModeIcon = document.getElementById('light-mode-icon');
    const darkModeIcon = document.getElementById('dark-mode-icon');
    const body = document.body;

    // Check local storage for theme preference
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        lightModeIcon.style.display = 'none';
        darkModeIcon.style.display = 'block';
    }

    lightModeIcon.addEventListener('click', () => {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark'); // Save theme preference
        lightModeIcon.style.display = 'none';
        darkModeIcon.style.display = 'block';
    });

    darkModeIcon.addEventListener('click', () => {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light'); // Save theme preference
        darkModeIcon.style.display = 'none';
        lightModeIcon.style.display = 'block';
    });


document.addEventListener('click', function (e) {
    var navbar = document.getElementById('navbarNav');
    var toggleButton = document.querySelector('.nav-menu');
  
    // If the clicked area is outside the navbar and the menu is open
    if (!navbar.contains(e.target) && !toggleButton.contains(e.target)) {
      if (navbar.classList.contains('show')) {
        var collapse = new bootstrap.Collapse(navbar, {
          toggle: false
        });
        collapse.hide(); // Only hide if the navbar is open
      }
    }
  });
  
  




document.addEventListener('DOMContentLoaded', function() {
    const skills = document.querySelectorAll('.circular-progress');
    
    skills.forEach(function(skill) {
        const percentage = skill.getAttribute('data-percentage');
        const circle = skill.querySelector('.progress');
        const radius = circle.r.baseVal.value;
        const circumference = 2 * Math.PI * radius;
        
        const offset = circumference - (percentage / 100) * circumference;
        circle.style.strokeDashoffset = offset;
    });
});



// JavaScript to handle tab switching with fade animation
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all tab buttons
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));

        // Add active class to the clicked tab button
        button.classList.add('active');

        // Hide all content sections
        document.querySelectorAll('.content').forEach(content => {
            content.classList.remove('active');
        });

        // Show the content corresponding to the clicked tab
        const target = button.getAttribute('data-target');
        document.querySelector(`#${target}`).classList.add('active');
    });
});




// Optionally, you can show a success message or redirect user upon successful form submission.
document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting immediately

    // Show a thank you alert or redirect
    alert("Thank you! Your message has been sent.");
   // Optionally redirect to a thank you page
});





// Back-to-Top Button Functionality
const backToTopButton = document.getElementById('btn-back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) { // Show button when scrolled down 200px
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // Smooth scrolling effect
  });
});

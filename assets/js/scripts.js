document.addEventListener("DOMContentLoaded", function() {
    var currentUrl = window.location.href;

    // Loop through each nav link and check if it matches the current URL
    document.querySelectorAll("nav ul li a").forEach(function(link) {
        if (link.href === currentUrl) {
            link.classList.add("active"); // Add active class to the matching link
        }
    });
});

// For drop down
document.addEventListener('DOMContentLoaded', function () {
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropbtn.addEventListener('click', function (event) {
        event.preventDefault();
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });

    document.addEventListener('click', function (event) {
        if (!dropbtn.contains(event.target) && !dropdownContent.contains(event.target)) {
            dropdownContent.style.display = 'none';
        }
    });
});
// For drop down

// service testimonial divs
let currentTestimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
  testimonials.forEach((testimonial, i) => {
    testimonial.classList.remove('active');
    if (i === index) {
      testimonial.classList.add('active');
    }
  });
}

function nextTestimonial() {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  showTestimonial(currentTestimonialIndex);
}

setInterval(nextTestimonial, 5000); // Change testimonial every 5 seconds

// Initial call to display the first testimonial
showTestimonial(currentTestimonialIndex);

// service testimonial divs


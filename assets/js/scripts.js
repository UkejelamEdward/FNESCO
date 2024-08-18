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

// about us##################################################
document.addEventListener("DOMContentLoaded", function() {
  const missionText = document.getElementById('mission-text');
  const visionText = document.getElementById('vision-text');
  const heading = document.getElementById('mission-vision-heading');

  function animateText(elementToShow, elementToHide, headingText) {
      elementToHide.classList.remove('animated');
      elementToHide.style.display = 'none';

      setTimeout(() => {
          heading.textContent = headingText;
          elementToShow.classList.add('animated');
          elementToShow.style.display = 'block';
      }, 500);
  }

  function startAnimation() {
      animateText(visionText, missionText, "Our Vision");
      setTimeout(() => {
          animateText(missionText, visionText, "Our Mission");
      }, 14000); // 14 seconds delay (5s typing + 2s pause + 7s hiding)
  }

  startAnimation();
  setInterval(startAnimation, 28000); // repeat every 28 seconds
});
// aboutus#######################################################################
// aboutussmall#######################################################################
document.addEventListener("DOMContentLoaded", function() {
    const missionTextSmall = document.getElementById('mission-textsmall');
    const visionTextSmall = document.getElementById('vision-textsmall');
    const headingSmall = document.getElementById('mission-visionsmall-heading');

    function toggleText() {
        if (headingSmall.textContent === "Our Mission") {
            headingSmall.textContent = "Our Vision";
            missionTextSmall.classList.remove('active');
            visionTextSmall.classList.add('active');
        } else {
            headingSmall.textContent = "Our Mission";
            visionTextSmall.classList.remove('active');
            missionTextSmall.classList.add('active');
        }
    }

    // Initially show the mission text
    missionTextSmall.classList.add('active');

    // Toggle between the texts every 5 seconds
    setInterval(toggleText, 5000);
});

// aboutussmall#######################################################################
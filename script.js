// script.js

// Function to set greeting message based on the time of day
function setGreeting() {
    const greetingElement = document.getElementById('greeting');
    const currentHour = new Date().getHours();

    let greetingMessage = '';

    if (currentHour < 12) {
        greetingMessage = 'Good Morning!';
    } else if (currentHour < 18) {
        greetingMessage = 'Good Afternoon!';
    } else {
        greetingMessage = 'Good Evening!';
    }

    greetingElement.textContent = greetingMessage;
}

// Function to handle scroll animation for image boxes
function animateOnScroll() {
    const imageBoxes = document.querySelectorAll('.image-box');
    const triggerBottom = window.innerHeight * 0.8; // Trigger point

    imageBoxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            box.classList.add('show');
        } else {
            box.classList.remove('show');
        }
    });
}

// Function to make the image move with the cursor
function applyImageMovement() {
    const imageBoxes = document.querySelectorAll('.image-box');

    imageBoxes.forEach(box => {
        const img = box.querySelector('img');
        
        box.addEventListener('mousemove', (e) => {
            const boxRect = box.getBoundingClientRect();
            const x = e.clientX - boxRect.left; // X position relative to the box
            const y = e.clientY - boxRect.top;  // Y position relative to the box

            // Move the image based on cursor position
            img.style.transform = `scale(1.2) translate(${(x - boxRect.width / 2) / 10}px, ${(y - boxRect.height / 2) / 10}px)`;
        });

        // Reset the image when the mouse leaves
        box.addEventListener('mouseleave', () => {
            img.style.transform = `scale(1)`; // Reset zoom and position
        });
    });
}

// Modal (Lightbox) functionality for enlarging image on click
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const closeModalBtn = document.querySelector('.modal-close');

// When an image is clicked, open the modal and display the clicked image
document.querySelectorAll('.image-box img').forEach(image => {
    image.addEventListener('click', () => {
        modal.style.display = 'flex'; // Show modal
        modalImg.src = image.src; // Set the clicked image source
    });
});

// Close the modal when the close button is clicked
closeModalBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close the modal when clicking outside the image
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});

// Initialize scroll animation, greeting, and image movement on page load
setGreeting();
window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Trigger for elements already in view on page load

// Initialize cursor follow effect
applyImageMovement();

// Toggle sidebar on menu icon click
document.getElementById('menu-toggle').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    // Toggle the active class to show/hide the sidebar and overlay
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
});

// Close the sidebar when clicking outside of it (on the overlay)
document.getElementById('overlay').addEventListener('click', function() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');

    // Remove the active class to hide the sidebar and overlay
    sidebar.classList.remove('active');
    overlay.classList.remove('active');
});

/// Theme toggle script
const toggleSwitch = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme') || 'light'; // Default to light mode

// Apply the saved theme
document.body.classList.add(`${currentTheme}-mode`);

toggleSwitch.addEventListener('change', () => {
    const theme = toggleSwitch.checked ? 'dark' : 'light';
    document.body.className = ''; // Clear existing classes
    document.body.classList.add(`${theme}-mode`);
    localStorage.setItem('theme', theme); // Save preference
});

// Check and apply the saved theme on page load
if (currentTheme === 'dark') {
    toggleSwitch.checked = true;
}

// Get the button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// Show or hide the button based on scroll position
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = 'flex'; // Show button when scrolled
    } else {
        scrollToTopBtn.style.display = 'none'; // Hide button when at the top
    }
};

// Scroll back to the top when the button is clicked
scrollToTopBtn.addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Smooth scroll to top
});

 // Get the current URL
  const currentPage = window.location.pathname;

  // Get all the links in the navbar
  const navLinks = document.querySelectorAll('nav ul li a');

  // Loop through each link and check if its href matches the current page
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active'); // Add 'active' class to the matching link
    }
  });
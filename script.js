// Get all navigation buttons and course cards
const navButtons = document.querySelectorAll('.nav-button');
const courseCards = document.querySelectorAll('.course-card');

// Add event listeners to navigation buttons
navButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.getAttribute('data-category');

    // Show/hide course cards based on selected category
    courseCards.forEach(card => {
      if (category === 'all' || card.getAttribute('data-category') === category) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

function showAnimation(courseLink) {
  const overlay = document.getElementById('loading-overlay');
  
  // Show the loading spinner
  overlay.style.display = 'flex';

  // Wait for 2 seconds (for the animation to run) before redirecting
  setTimeout(function() {
    overlay.style.display = 'none';  // Hide the spinner after 2 seconds
    window.location.href = courseLink;  // Redirect to the course link
  }, 5000);  // 2 seconds delay before redirection
}

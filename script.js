document.getElementById('learn-more-btn').addEventListener('click', function () {
  const shortText = document.getElementById('short-text');
  const fullText = document.getElementById('full-text');
  const button = document.getElementById('learn-more-btn');

  if (fullText.style.display === 'none') {
    shortText.style.display = 'none';
    fullText.style.display = 'block';
    button.textContent = 'Show Less'; // Change button text
  } else {
    shortText.style.display = 'block';
    fullText.style.display = 'none';
    button.textContent = 'Learn More'; // Reset button text
  }
});


let currentIndex = 0;
const founders = document.querySelectorAll('.founder');
const slider = document.getElementById('founders-slider');
let slideInterval;

// Function to show the next founder
function showNextFounder() {
  const currentFounder = founders[currentIndex];
  currentFounder.classList.remove('active');
  currentFounder.classList.add('exiting');

  currentIndex = (currentIndex + 1) % founders.length; // Loop through founders
  const nextFounder = founders[currentIndex];

  // Wait for slide-out animation before showing the next founder
  setTimeout(() => {
    currentFounder.classList.remove('exiting');
    nextFounder.classList.add('active');
  }, 1000); // Match transition duration in CSS
}

// Function to start the sliding animation
function startSlider() {
  slideInterval = setInterval(showNextFounder, 3000); // Slide every 3 seconds
}

// Function to stop the sliding animation
function stopSlider() {
  clearInterval(slideInterval);
}

// Start the slider initially
founders[0].classList.add('active'); // Show the first founder
startSlider();

// Pause sliding when finger/cursor is on the slider
slider.addEventListener('mouseenter', stopSlider); // For mouse hover
slider.addEventListener('mouseleave', startSlider); // For mouse leave
slider.addEventListener('touchstart', stopSlider); // For touch start
slider.addEventListener('touchend', startSlider); 


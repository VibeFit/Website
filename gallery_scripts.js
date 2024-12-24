// Get all images and the pop-up elements
const images = document.querySelectorAll('.gallery .image img');
const popup = document.getElementById('popup');
const popupImg = document.getElementById('popup-img');
const closeBtn = document.querySelector('.close-btn');

// Add click event listeners to all images
images.forEach((image) => {
  image.addEventListener('click', () => {
    popupImg.src = image.src; // Set the pop-up image source
    popup.classList.remove('hidden'); // Show the pop-up
  });
});

// Add click event listener to the close button
closeBtn.addEventListener('click', () => {
  popup.classList.add('hidden'); // Hide the pop-up
});

// Close the pop-up when clicking outside the image
popup.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.add('hidden');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('.gallery img');
  const loadedImages = new Set(); // Track loaded images

  const observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0.1,
  };

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const img = entry.target;

      if (entry.isIntersecting) {
        // If the image is visible, load it
        if (!loadedImages.has(img.dataset.src)) {
          img.src = img.dataset.src; // Set the actual source
          img.onload = () => {
            img.classList.add('loaded'); // Add fade-in effect
            loadedImages.add(img.dataset.src); // Mark as loaded
          };
        }
      } else {
        // If the image is outside the viewport, unload it
        if (img.src && !loadedImages.has(img.dataset.src)) {
          img.src = ""; // Clear the image src
        }
      }
    });
  }, observerOptions);

  images.forEach((img) => imageObserver.observe(img));
});

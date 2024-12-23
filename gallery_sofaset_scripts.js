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

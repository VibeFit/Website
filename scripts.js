document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.body.classList.add("loaded"); // Add class to trigger transitions
    }, 2000); // 1 second delay for animation
});


let currentIndex = 0;

const images = document.querySelectorAll('.carousel img');
const totalImages = images.length;

function changeImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  const offset = -currentIndex * 100;
  document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

// Change image every 3 seconds
setInterval(changeImage, 3000);
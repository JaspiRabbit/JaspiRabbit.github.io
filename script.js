// Image Carousel
let currentImageIndex = 0;
const images = document.querySelectorAll('.carousel img');

function changeImage() {
  images[currentImageIndex].style.opacity = '0';
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].style.opacity = '1';
}

setInterval(changeImage, 3000);

// Smooth Scrolling for Nav Links and Home Button
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetSection = document.querySelector(this.getAttribute('href'));
    targetSection.scrollIntoView({
      behavior: 'smooth'
    });

    // If the home button is clicked, reset the carousel to the first image.
    if (this.classList.contains('home-button')) {
      currentImageIndex = 0;
      images.forEach((image, index) => {
        image.style.opacity = index === 0 ? '1' : '0';
      });
    }
  });
});

// Form Submission
function handleSubmit() {
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // You can handle the form data here (e.g., send it to a backend server).
  // For this example, we'll simply display an alert with the form data.
  const formData = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
  alert('Form submitted successfully!\n\n' + formData);
  
  // Clear the form fields after submission.
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
  
  return false; // Prevent the form from submitting traditionally.
}


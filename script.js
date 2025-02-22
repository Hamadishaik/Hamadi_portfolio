const toggleButton = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");

toggleButton.addEventListener("click", () => {
  navbarMenu.classList.toggle("active");
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get all form inputs
  const formData = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  // Here you would typically send the form data to your server
  // Example with fetch:
  /*
            fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            })
            .then(response => response.json())
            .then(data => {
                showSuccessMessage();
            })
            .catch(error => {
                console.error('Error:', error);
            });
            */

  // For demo purposes, we'll just show the success message
  showSuccessMessage();

  // Reset the form
  this.reset();
});

function showSuccessMessage() {
  const successMessage = document.getElementById("successMessage");
  successMessage.style.display = "block";

  // Add a fade-in effect
  successMessage.style.opacity = "0";
  successMessage.style.transition = "opacity 0.3s ease-in";

  // Trigger reflow to ensure the transition works
  successMessage.offsetHeight;

  // Show the message
  successMessage.style.opacity = "1";

  // Hide the message after 5 seconds
  setTimeout(() => {
    successMessage.style.opacity = "0";
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 300);
  }, 5000);
}
document.getElementById("backToTop").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
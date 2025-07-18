// Listen for form submit
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent page reload

  alert("Merci pour votre message ! Je vous répondrai bientôt.");

  this.reset(); // Clear the form inputs
});

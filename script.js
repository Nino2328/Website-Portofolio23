const menuIcon = document.querySelector("#menu-icon");
const navLinks = document.querySelector(".nav-links");
const contactForm = document.querySelector("#contact-form");

//menu toggle
menuIcon.onclick = () => {
  navLinks.classList.toggle("active");
};

//Close menu when clicking a link
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Contact form submission
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // Add your form submission logic here
  alert("Message sent successfully!");
  contactForm.reset();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

//Menangani submit form
function handleSubmit(event) {
  event.preventDefault();
  const email = event.target.querySelector('input[type="email"]').value;
  const message = event.target.querySelector("textarea").value;

  // Add your form submission logic here
  console.log("Form submitted:", { email, message });

  // Reset form
  event.target.reset();
  alert("Message sent successfully!");
}

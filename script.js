// Mobile navigation
const menuToggle = document.querySelector("#menuToggle");
const navLinks = document.querySelector("#navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
    });
  });
}

// Reveal sections as they enter the viewport
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

// Current year in footer
const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

// Contact form: prepare an email draft; no data is stored or sent by this page.
const contactForm = document.querySelector("#contactForm");
const feedback = document.querySelector("#formFeedback");
const portfolioEmail = "mutukudennis300@gmail.com";

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formData = new FormData(contactForm);
    const name = String(formData.get("name") || "").trim();
    const senderEmail = String(formData.get("email") || "").trim();
    const subject = String(formData.get("subject") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !senderEmail || !subject || !message) {
      feedback.textContent = "Please complete all fields before continuing.";
      return;
    }

    const body = `Name: ${name}\nEmail: ${senderEmail}\n\n${message}`;
    const mailto = `mailto:${portfolioEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    feedback.textContent = "Opening your email app with the message drafted…";
    window.location.href = mailto;
  });
}

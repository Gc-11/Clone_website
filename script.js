// ===============================
// 1. BUTTON CLICK INTERACTION
// ===============================

const learnButtons = document.querySelectorAll(".learn-btn");

learnButtons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Thank you for your interest! More information coming soon.");
  });
});


// ===============================
// 2. FORM VALIDATION
// ===============================

const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    message.style.color = "red";
    message.textContent = "All fields are required!";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (!email.match(emailPattern)) {
    message.style.color = "red";
    message.textContent = "Enter a valid email address!";
    return;
  }

  message.style.color = "green";
  message.textContent = "Form submitted successfully!";
  form.reset();
});
// ===============================
// Footer Accordion Dropdown
// ===============================

const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
  header.addEventListener("click", () => {

    const content = header.nextElementSibling;
    const arrow = header.querySelector(".arrow");

    // Close all other dropdowns
    headers.forEach(h => {
      if (h !== header) {
        h.classList.remove("active");
        h.nextElementSibling.style.display = "none";
        h.querySelector(".arrow").classList.remove("rotate");
      }
    });

    // Toggle current
    header.classList.toggle("active");

    if (content.style.display === "block") {
      content.style.display = "none";
      arrow.classList.remove("rotate");
    } else {
      content.style.display = "block";
      arrow.classList.add("rotate");
    }

  });
});

// ===============================
// 3. THEME TOGGLE (DOM MANIPULATION)
// ===============================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    themeToggle.textContent = "☀️";
    localStorage.setItem("theme", "light");
  } else {
    themeToggle.textContent = "🌙";
    localStorage.setItem("theme", "dark");
  }
});

// Load saved theme
window.addEventListener("load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("light-theme");
    themeToggle.textContent = "☀️";
  }
});


// ===============================
// 4. SHOW / HIDE MOBILE NAV
// ===============================

const menuToggle = document.getElementById("menuToggle");
const mobileNav = document.getElementById("mobileNav");

menuToggle.addEventListener("click", () => {
  mobileNav.classList.toggle("show-nav");
});


// ===============================
// 5. INTERACTIVE NAVIGATION
// ===============================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navLinks.forEach(l => l.classList.remove("active"));
    this.classList.add("active");
  });
});


// ===============================
// 6. BASIC IMAGE SLIDER (Hero)
// ===============================

let hero = document.querySelector(".hero");
let images = [
  "https://cdn.sanity.io/images/kbqq3e0r/production/e144c901de064e9a4d5115472e51c092cc58e348-2880x1622.jpg?w=1080&q=100",
  "https://cdn.sanity.io/images/kbqq3e0r/production/62c1873dd7ed33f66aa1f7d0c4e17cc8259cef8b-740x960.jpg?w=1080&q=100"
];

let index = 0;

hero.addEventListener("click", () => {
  index++;
  if (index >= images.length) index = 0;
  hero.style.backgroundImage = `url(${images[index]})`;
});

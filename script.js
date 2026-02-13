// ===============================
// EMAILJS INIT
// ===============================
(function(){
  emailjs.init("QDISLyUzS9wjPOJ3w");
})();

// ===============================
// FULLSCREEN NAV TOGGLE
// ===============================
// FULLSCREEN NAVIGATION

const menuBtn = document.querySelector(".menu");
const fullscreenNav = document.getElementById("fullscreenNav");
const closeNav = document.getElementById("closeNav");

// OPEN NAV
menuBtn.addEventListener("click", () => {
  fullscreenNav.style.transform = "translateY(0)";
});

// CLOSE NAV (X button)
closeNav.addEventListener("click", () => {
  fullscreenNav.style.transform = "translateY(-100%)";
});

// CLOSE NAV WHEN CLICKING ANY LINK
document.querySelectorAll("#fullscreenNav a").forEach(link => {
  link.addEventListener("click", () => {
    fullscreenNav.style.transform = "translateY(-100%)";
  });
});

// ===============================
// FOOTER DROPDOWN ACCORDION
// ===============================
document.querySelectorAll(".footer-item").forEach(item => {
  item.addEventListener("click", function(){

    // Toggle active class
    this.classList.toggle("active");

    // Check if content exists already
    let content = this.nextElementSibling;

    if (!content || !content.classList.contains("dropdown-content")) {
      
      // Create dropdown dynamically
      content = document.createElement("div");
      content.classList.add("dropdown-content");
      content.style.padding = "10px 0";
      content.style.color = "#ccc";

      if (this.innerText.includes("COMPANY")) {
        content.innerHTML = `
          <p>Our Ambitions</p>
          <p>Our Leadership</p>
          <p>Our History</p>
        `;
      }

      if (this.innerText.includes("BRAND IMPACT")) {
        content.innerHTML = `
          <p>People & Communities</p>
          <p>Chicken & Nutrition</p>
        `;
      }

      if (this.innerText.includes("CAREERS")) {
        content.innerHTML = `
          <p>Who We Are</p>
          <p>Working Here</p>
        `;
      }

      if (this.innerText.includes("NEWSROOM")) {
        content.innerHTML = `
          <p>Press Releases</p>
          <p>Blog</p>
        `;
      }

      this.after(content);
    } else {
      content.remove();
    }

  });
});
// ===============================
// LEARN MORE BUTTON CLICK
// ===============================
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", function() {
    window.location.href = this.dataset.link;
  });
});
// ===============================
// CONTACT FORM EMAILJS
// ===============================
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e){
  e.preventDefault();

  emailjs.sendForm("service_zm9on1w","template_hg5j8jv", this)
  .then(function(){
      message.style.color = "lime";
      message.innerText = "Message sent successfully!";
      form.reset();
  }, function(){
      message.style.color = "red";
      message.innerText = "Failed to send message.";
  });
});

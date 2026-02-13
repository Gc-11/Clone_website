// ===============================
// EMAILJS INIT
// ===============================
(function(){
  emailjs.init("QDISLyUzS9wjPOJ3w");
})();

// ===============================
// FULLSCREEN NAV TOGGLE
// ===============================
const menu = document.querySelector(".menu");
const fullscreenNav = document.getElementById("fullscreenNav");

menu.addEventListener("click", function(){
  if(fullscreenNav.style.transform === "translateY(0%)"){
    fullscreenNav.style.transform = "translateY(-100%)";
  } else {
    fullscreenNav.style.transform = "translateY(0%)";
  }
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
document.querySelectorAll(".section").forEach(section => {

  const button = section.querySelector(".btn");
  if (!button) return;

  button.addEventListener("click", function() {

    const title = section.querySelector("h2").innerText;

    if (title.includes("COMPANY")) {
      window.location.href = "https://global.kfc.com/company";
    }

    if (title.includes("BRAND IMPACT")) {
      window.location.href = "https://global.kfc.com/brand-impact";
    }

    if (title.includes("CAREERS")) {
      window.location.href = "https://careers.global.kfc.com/";
    }

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

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
    alert(item.innerText + " dropdown opened");
  });
});

// ===============================
// LEARN MORE BUTTON CLICK
// ===============================
document.querySelectorAll(".btn").forEach(button => {
  button.addEventListener("click", function(){
    alert("Learn More clicked!");
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

function sendEmail() {
  window.location.href = "mailto:devin1299@outlook.com";
}

function scrollBy200vh() {
  window.scrollBy({
    top: window.innerHeight * 2,
    behavior: "smooth",
  });
}

function scrollBy100vh() {
  window.scrollBy({
    top: window.innerHeight,
    behavior: "smooth",
  });
}
function scrollToBottom() {
  window.scrollBy({
    top: window.innerHeight * 5,
    behavior: "smooth",
  });
}
function openPDF() {
  window.open("../myres/resume-devin.pdf", "_blank");
}
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});
const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

var navbar = document.querySelector(".navbar");
var prevScrollpos = window.pageYOffset;

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.classList.remove("hidden");
  } else {
    navbar.classList.add("hidden");
  }
  prevScrollpos = currentScrollPos;
};


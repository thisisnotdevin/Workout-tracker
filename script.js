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
  window.open("./myres/resume-devin.pdf", "_blank");
}
// hidden element shows up
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
// hidden element shows up


// container effect removed for phone
const container = document.getElementById('my-container');

function handleResize() {
  if (window.innerWidth <= 767) {
    container.classList.remove('hidden');
  } else {
    container.classList.add('hidden');
  }
}

window.addEventListener('resize', handleResize);
handleResize(); // call the function initially
// container effect removed for phone


// button to scroll to top
const scrollToTopBtn = document.getElementById('scroll-to-top-btn');

function handleScroll() {
  if (window.pageYOffset > 100) {
    scrollToTopBtn.style.display = 'block';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

window.addEventListener('scroll', handleScroll);
scrollToTopBtn.addEventListener('click', scrollToTop);

// button to scroll to top

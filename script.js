function sendEmail() {
  toggleNavbar()
  flipCheckbox() 
  window.location.href = "mailto:devin1299@outlook.com";
}

function scrollBy200vh() {
  window.scrollBy({
    top: window.innerHeight * 2,
    behavior: "smooth",
  });
}

function scrollBy100vh() {
  toggleNavbar()
  flipCheckbox() 
  window.scrollBy({
    top: window.innerHeight,
    behavior: "smooth",
  });
}
function scrollToBottom() {
  toggleNavbar()
  flipCheckbox() 
  window.scrollBy({
    top: window.innerHeight * 10,
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

const hiddenElements2 = document.querySelectorAll(".hidden2");
hiddenElements2.forEach((el) => observer.observe(el));

window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    navbar.classList.remove("hidden2");
  } else {
    navbar.classList.add("hidden2");
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
function toggleMode() {
	var body = document.querySelector('body');
	body.classList.toggle('dark-mode');
}


// window.addEventListener('load', function(){
//   var loader = document.getElementById('loader');
//   var website = document.getElementById('website');

//   // Hide the loader after 3 seconds
//   setTimeout(function(){
//     loader.style.display = 'none';
//     website.style.display = 'block';
//   }, 3000);
// });

function toggleNavbar() {
  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("nav-list-hidden");
  if (navbar.classList.contains("nav-list-hidden")) {
    document.body.style.overflow = "hidden";
  }
  else {
    document.body.style.overflow = "auto";
  }
}


function flipCheckbox() {
  var checkbox = document.getElementById("check");
  checkbox.checked = !checkbox.checked;
}

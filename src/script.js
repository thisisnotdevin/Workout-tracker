function sendEmail() {
    window.location.href = "mailto:devin1299@outlook.com";
  }

function scrollBy100vh() {
    window.scrollBy({
      top: window.innerHeight,
      behavior: 'smooth'
    });
}
 
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
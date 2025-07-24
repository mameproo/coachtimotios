

document.getElementById("abt-btn").addEventListener("click", function() {
  window.location.href = "#about";
});
document.getElementById("contact-btn").addEventListener("click", function() {
  window.location.href = "#contact";
});

// Array of text strings to display
const textArray = ["I am  a CONCACAF A LICENSED Football Coach. ", "With 4 Years Expriance In Canada. ", " Here is My portfolio. "];
let currentIndex = 0;
let charIndex = 0;
let currentText = '';
let isDeleting = false;
const typingSpeed = 100;
const pauseBetween = 2000; // Pause between texts

function typeEffect() {
    const autoTypeElement = document.getElementById('auto-type');
    currentText = textArray[currentIndex];
    
    if (isDeleting) {
        // Removing characters
        autoTypeElement.innerHTML = currentText.substring(0, charIndex--);
        if (charIndex < 0) {
            isDeleting = false;
            currentIndex = (currentIndex + 1) % textArray.length; // Move to the next idea
        }
    } else {
        // Adding characters
        autoTypeElement.innerHTML = currentText.substring(0, charIndex++);
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, pauseBetween); // Pause before deleting
            return;
        }
    }
    
    setTimeout(typeEffect, typingSpeed);
}

// Call the function after the page loads
window.onload = () => {
    typeEffect();
};
// Animate elements when they scroll into view
$(document).ready(function() {
    $(window).scroll(function() {
        $('.animate__animated').each(function() {
            let elementTop = $(this).offset().top;
            let windowTop = $(window).scrollTop() + $(window).height() * 0.85;

            if (windowTop > elementTop) {
                $(this).addClass('animate__fadeInUp');
            }
        });
    });
});
//testimonial 
const testimonialsContainer = document.querySelector(".testimonials-container");
const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const progressDots = document.getElementById("progress-dots");

const testimonials = [
  {
    name: "Dawit Estifanos",
    position: "Former Ethiopian Player",
    photo: "../img/dawitEstifanos.jpg",
    text:
      "Idealist. Always a student. Learning from everyone including players. Open minded. Brave."
  },
  {
    name: "Addis Worku ",
    position: "UEFA B LICENSED COACH",
    photo: "../img/addisworku.png",
    text:
      "You are curious, Open minded, Brave, Direct(Honest)!"
  },
  {
    name: "Coach Seyoum Kebede",
    position: " CAF A LICENSED COACH.",
    photo: "../img/seyuom.jpg",
    text:
        "Focused & committed. Believer and always student"
  },
  {
    name: "Jason Blake",
    position: "UEFA PRO LICENCED COACH",
    photo: "../img/jason.jpg",
    text:
       "Your level of confidence and commitment to coaching players is top level. This is the supper power you have."
  },
  {
    name: "Fantaye Wubetu",
    position: "COACH",
    photo: "https://www.seekpng.com/png/detail/966-9665317_placeholder-image-person-jpg.png",
    text:
      "Brilliant football mind and good listener."
  }
];

let idx = 0;

testimonials.forEach((testimonial) => {
  const dot = document.createElement("div");
  dot.classList.add("progress-dot");
  progressDots.appendChild(dot);
});

function displayTestimonial() {
  const { name, position, photo, text } = testimonials[idx];

  testimonial.innerHTML = text;
  userImage.src = photo;
  username.innerHTML = name;
  role.innerHTML = position;

  updateProgressDots();
}

function updateProgressDots() {
  const dots = progressDots.children;
  [...dots].forEach((dot) => {
    dot.classList.remove("active");
  });
  dots[idx].classList.add("active");
}

btnNext.addEventListener("click", () => {
  idx === testimonials.length - 1 ? (idx = 0) : idx++;
  console.log(idx);

  displayTestimonial();
});

btnPrev.addEventListener("click", () => {
  idx === 0 ? (idx = testimonials.length - 1) : idx--;
  console.log(idx);

  displayTestimonial();
});

displayTestimonial();


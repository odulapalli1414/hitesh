const textElement = document.getElementById('animated-text');
const texts = ["Data Science", "Python Developer", "Java Developer"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingSpeed = 100;
const erasingSpeed = 100;
const delayBetweenTexts = 200;

function type() {
  const currentText = texts[textIndex];
  const currentDisplay = currentText.substring(0, charIndex);

  textElement.textContent = currentDisplay;

  if (!isDeleting && charIndex < currentText.length) {
    charIndex++;
    setTimeout(type, typingSpeed);
  } else if (isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(type, erasingSpeed);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      textIndex = (textIndex + 1) % texts.length;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(type, delayBetweenTexts);
    }
  }
}

document.addEventListener('DOMContentLoaded', type);

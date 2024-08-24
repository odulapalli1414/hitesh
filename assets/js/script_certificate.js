// Modal functionality
const modal = document.getElementById("certificateModal");
const modalImg = document.getElementById("modalImg");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeBtn = document.querySelector(".close");

// Open modal when a certificate is clicked
document.querySelectorAll('.certificate-card').forEach(card => {
  card.addEventListener('click', () => {
    const imgSrc = card.querySelector('.certificate-img').src;
    const title = card.querySelector('.certificate-title').innerText;
    const description = card.querySelector('.certificate-description').innerText;

    modalImg.src = imgSrc;
    modalTitle.innerText = title;
    modalDescription.innerText = description;

    modal.style.display = "block";
  });
});

// Close modal when 'X' is clicked
closeBtn.onclick = function() {
  modal.style.display = "none";
}

// Close modal when clicking outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

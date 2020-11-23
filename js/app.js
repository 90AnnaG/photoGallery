const modal = document.querySelector('.modal');
const closeModalBtn = document.getElementById('closeModal');
const slides = document.getElementsByClassName('modal__bigImage');

function openModal() {
    modal.classList.add('show_modal');
}

closeModalBtn.addEventListener('click', function (e) {
    if (modal.className = 'show_modal') {
        modal.classList.add('.modal');
    }
});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}
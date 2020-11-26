const myModal = document.querySelector('.modal');
const photos = document.querySelectorAll('.gallery__smallImage')
const closeModalBtn = document.querySelector('.modal__close-btn');
const prevImgBtn = document.querySelector('#prevButton');
const nextImgBtn = document.querySelector('#nextButton');


// click close button to close modal
closeModalBtn.addEventListener('click', () => {
    myModal.style.display = 'none';
});


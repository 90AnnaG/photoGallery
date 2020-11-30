const lightbox = document.querySelector('.lightbox');
const gallery = document.querySelector('.gallery');
gallery.appendChild(lightbox);
const images = document.querySelectorAll('.gallery__smallImage');

images.forEach(image => {
  image.addEventListener('click', e => {
    lightbox.classList.add('active')
    const img = document.createElement('img');
    img.src = image.src
    while (lightbox.firstChild) {
      lightbox.removeChild(lightbox.firstChild)
    }
    lightbox.appendChild(img)
    console.log(lightbox);
  })
})

lightbox.addEventListener('click', e => {
  if (e.target !== e.currentTarget) return
  lightbox.classList.remove('active')
})
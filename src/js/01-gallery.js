import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const cardsMurkup = createGalleryCards(galleryItems);

gallery.insertAdjacentHTML("afterbegin", cardsMurkup);


function createGalleryCards(galleryItems) {
	return galleryItems.map(({ preview, original, description }) => {
		return `<a class="gallery__item" href="${original}"}> 
		<img class="gallery__image" src="${preview}" alt="${description}"/>
	 </a>`
	}).join('');
};

new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionDelay: 300,
});

const date = new Date(2030, 0, 16, 14, 25, 0, 0);
console.log(date);
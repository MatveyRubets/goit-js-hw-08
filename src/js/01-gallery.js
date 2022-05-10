import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

const gallery = document.querySelector('.gallery');
const imagesMarkup = createImageGallery(galleryItems);

gallery.insertAdjacentHTML('beforeend', imagesMarkup);

function createImageGallery(images) {
  return images.map(mapImages).join('');
}
function mapImages({ preview, original, description }) {
  return ` 
	<a class="gallery__item" href="${original}">
		<img class="gallery__image"
							src="${preview}" 
							alt="${description}" />
	</a>
`;
}

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

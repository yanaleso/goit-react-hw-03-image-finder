import ImageGalleryItem from 'components/ImageGalleryItem';
import PropTypes from 'prop-types';
import { Gallery } from './ImageGallery.styled';

const ImageGallery = ({ images, onImageClick }) => (
        <Gallery>
            {images.map(({ id, webformatURL, tags }, index) => (
              <ImageGalleryItem key={id} imgUrl={webformatURL} tags={tags} index={index} onImageClick={onImageClick} />
                ))}
        </Gallery>
    )


ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
}


export default ImageGallery;
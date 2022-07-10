import PropTypes from 'prop-types';
import { Image, Item } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({ index, imgUrl, tags, onImageClick }) => {
    return (
    <Item>
        <Image src={imgUrl} alt={tags} onClick={() => onImageClick(index)}/>
    </Item>
)}

ImageGalleryItem.propTypes = {
  ImgUrl: PropTypes.string,
  tags: PropTypes.string.isRequired,
}

export default ImageGalleryItem;
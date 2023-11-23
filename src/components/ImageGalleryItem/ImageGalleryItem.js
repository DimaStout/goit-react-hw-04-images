import { ImageGalleryItemStyled } from './ImageGalleryItem.styled';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ img, openModal }) => {
  const { webformatURL, largeImageURL, tags } = img;

  return (
    <div>
      <ImageGalleryItemStyled>
        <img
          src={webformatURL}
          alt={tags}
          loading="lazy"
          onClick={() => openModal(largeImageURL, tags)}
        />
      </ImageGalleryItemStyled>
    </div>
  );
};

ImageGalleryItem.propTypes = {
  img: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  openModal: PropTypes.func.isRequired,
};

export default ImageGalleryItem;

import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryItemStyled } from 'components/ImageGalleryItem/ImageGalleryItem.styled';

import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryItemStyled>
      {images.map(img => (
        <ImageGalleryItem img={img} key={img.id} />
      ))}
    </ImageGalleryItemStyled>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
export default ImageGallery;

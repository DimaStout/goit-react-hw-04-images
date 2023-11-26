import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { ImageGalleryStyled } from './ImageGallery.styled'; // Import the styled component

import PropTypes from 'prop-types';

const ImageGallery = ({ images }) => {
  return (
    <ImageGalleryStyled>
      {' '}
      {/* Use the styled component here */}
      {images.map(img => (
        <ImageGalleryItem img={img} key={img.id} />
      ))}
    </ImageGalleryStyled>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};

export default ImageGallery;

import React, { useState } from 'react';
import { ImageGalleryItemStyled } from './ImageGalleryItem.styled';
import Modal from 'components/Modal';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ img }) => {
  const [showModal, setShowModal] = useState(false);
  const modalToggle = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };
  return (
    <ImageGalleryItemStyled>
      <img
        src={img.webformatURL}
        alt={img.tags}
        loading="lazy"
        onClick={modalToggle}
      />
      {showModal && (
        <Modal
          src={img.largeImageURL}
          alt={img.tags}
          modalToggle={modalToggle}
        />
      )}
    </ImageGalleryItemStyled>
  );
};

ImageGalleryItem.propTypes = {
  img: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
};

export default ImageGalleryItem;

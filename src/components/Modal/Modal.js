import { BackdropStyled, ModalStyled } from './Modal.styled';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ src, alt, modalToggle }) => {
  useEffect(() => {
    const handleEvent = e => {
      if (e.code === 'Escape' || e.target === e.currentTarget) {
        modalToggle();
      }
    };

    window.addEventListener('keydown', handleEvent);

    return () => {
      window.removeEventListener('keydown', handleEvent);
    };
  }, [modalToggle]);

  return createPortal(
    <BackdropStyled
      onClick={e => (e.target === e.currentTarget ? modalToggle() : null)}
    >
      <ModalStyled>
        <img src={src} alt={alt} loading="lazy" />
      </ModalStyled>
    </BackdropStyled>,
    modalRoot
  );
};

Modal.propTypes = {
  modalToggle: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Modal;

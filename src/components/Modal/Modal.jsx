import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Overlay from './Modal.styled';

const Modal = ({ src, alt, closeModal }) => {
  useEffect(() => {
    /*func for closing modal by pressing Esc*/
    const closingByEsc = e => {
      if (e.code === 'Escape') closeModal();
    };

    window.addEventListener('keydown', closingByEsc);

    return () => window.removeEventListener('keydown', closingByEsc);
  }, [closeModal]);

  /*func for closing modal by clicking on overlay*/
  const closingByClick = e => {
    if (e.currentTarget === e.target) closeModal();
  };

  return (
    <Overlay className="Overlay" onClick={closingByClick}>
      <div className="Modal">
        <img src={src} alt={alt} width="1024" height="768" />
      </div>
    </Overlay>
  );
};

export default Modal;

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};

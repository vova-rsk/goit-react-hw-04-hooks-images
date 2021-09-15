import { useState, memo } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import Modal from '../../Modal';
import List from './ImageGallery.styled';

const ImageGallery = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const modalShow = selectedImage || selectedImage === 0;

  return (
    <>
      <List className="ImageGallery">
        {images.map(({ webformatURL, tags }, idx) => (
          <ImageGalleryItem
            key={idx}
            src={webformatURL}
            alt={tags}
            onClick={() => setSelectedImage(idx)}
          />
        ))}
      </List>

      {modalShow && (
        <Modal
          src={images[selectedImage].largeImageURL}
          alt={images[selectedImage].tags}
          closeModal={() => setSelectedImage(null)}
        />
      )}
    </>
  );
};

export default memo(ImageGallery);

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string,
      tags: PropTypes.string,
    }),
  ),
};

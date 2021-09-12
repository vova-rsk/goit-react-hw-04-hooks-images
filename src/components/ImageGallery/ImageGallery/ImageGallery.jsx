import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../../Button';
import PixabayApi from '../../../services/pixabay-api';
import scrollTo from '../../../utils';
import Modal from '../../Modal';
import List from './ImageGallery.styled';

const ImageGallery = ({ query, statusChanging, setErrorMessage }) => {
  const [page, setPage] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  const [modal, setModal] = useState(false);
  const [isLoadMoreBtnShow, setIsLoadMoreBtnShow] = useState(false);

  /*setting default values when changing the query-key */
  useEffect(() => {
    if (!query) return;
    setPage(1);
    setSearchResult([]);
  }, [query]);

  /*getting a new group of pictures when changing the page number*/
  useEffect(() => {
    if (!page) return;

    setIsLoadMoreBtnShow(false);
    statusChanging('pending');

    PixabayApi.fetchImages(query, page)
      .then(({ hits, totalHits }) => {
        setSearchResult(state => [...state, ...hits]);
        statusChanging('resolved');
        setIsLoadMoreBtnShow([...searchResult, ...hits].length < totalHits);
      })
      .catch(error => {
        setErrorMessage('Oops, Something Went Wrong');
        statusChanging('error');
      })
      .finally(() => {
        scrollTo();
      });

    // eslint-disable-next-line
  }, [page, query]);

  /*func for showing the modal*/
  const showModal = e => {
    const index = Number(e.currentTarget.dataset.index);
    const currentItem = searchResult.find((item, idx) => idx === index);
    setModal(currentItem);
  };

  /*func for closing the modal*/
  const closeModal = () => {
    setModal(false);
  };

  /*func for incrementing the page number by 1*/
  const handleIncrementPage = () => {
    setPage(page => page + 1);
  };

  return (
    <>
      <List className="ImageGallery">
        {searchResult.map(({ webformatURL, largeImageURL, tags }, idx) => (
          <ImageGalleryItem
            key={idx}
            src={webformatURL}
            index={idx}
            dataSrc={largeImageURL}
            alt={tags}
            onClick={showModal}
          />
        ))}
      </List>
      {isLoadMoreBtnShow && (
        <Button handleIncrementPage={handleIncrementPage} />
      )}
      {modal && (
        <Modal
          src={modal.largeImageURL}
          alt={modal.tags}
          closeModal={closeModal}
        />
      )}
    </>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  query: PropTypes.string.isRequired,
  statusChanging: PropTypes.func.isRequired,
  setErrorMessage: PropTypes.func.isRequired,
  currentStatus: PropTypes.string.isRequired,
};

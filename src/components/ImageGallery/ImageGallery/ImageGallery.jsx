import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem';
import Button from '../../Button';
import PixabayApi from '../../../services/pixabay-api';
import scrollTo from '../../../utils';
import Modal from '../../Modal';
import List from './ImageGallery.styled';

const ImageGallery = ({
  query,
  statusChanging,
  setErrorMessage,
  currentStatus,
}) => {
  const [page, setPage] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  const [modal, setModal] = useState(false);
  const [isLoadMoreBtnShow, setIsLoadMoreBtnShow] = useState(true);

  /*Установка стартовой страницы и обнуление галлереи при смене ключа запроса*/
  useEffect(() => {
    if (!query) {
      return;
    }

    setPage(1);
    setSearchResult([]);
  }, [query]);

  /*Устаногвка статуса показа кнопки LoadMore в зависимости от состояния приложения*/
  useEffect(() => {
    currentStatus === 'resolve'
      ? setIsLoadMoreBtnShow(true)
      : setIsLoadMoreBtnShow(true);
  }, [currentStatus]);

  /*Запрос с обработкой при смене номера страницы*/
  useEffect(() => {
    // const changeStatus = (type) => {
    //   statusChanging(type);
    // };

    if (!page) {
      return;
    }

    // statusChanging('pending');
    // changeStatus('pending');

    PixabayApi.fetchImages(query, page)
      .then(({ hits, totalHits }) => {
        setSearchResult(state => [...state, ...hits]);
        // changeStatus('resolved');
      })
      .catch(error => {
        // changeStatus('error');
      })
      .finally(() => {
        scrollTo();
      });
  }, [page, query]);

  /*method for showing the modal*/
  const showModal = e => {
    const index = Number(e.currentTarget.dataset.index);
    const currentItem = searchResult.find((item, idx) => idx === index);
    setModal(currentItem);
  };

  /*method for closing the modal*/
  const closeModal = () => {
    setModal(false);
  };

  /*method for incrementing the page number by 1*/
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

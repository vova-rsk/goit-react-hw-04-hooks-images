import { useState, useEffect } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/Gallery/ImageGallery';
import AppContainer from './App.styled';
import LoaderSpinner from './components/Loader';
import Button from './components/Button';
import Error from './components/Error';
import PixabayApi from './services/pixabay-api';
import scrollTo from './utils';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
  ERROR: 'error',
};

const App = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState('');
  const [LoadMoreBtnShow, setLoadMoreBtnShow] = useState(false);

  /*setting default values when changing the query-key */
  useEffect(() => {
    if (!query) return;
    setPage(1);
  }, [query]);

  /*getting a new group of pictures when changing the page number*/
  useEffect(() => {
    if (!page) return;

    setLoadMoreBtnShow(false);
    setStatus(STATUS.PENDING);

    PixabayApi.fetchImages(query, page)
      .then(({ hits, totalHits }) => {
        page === 1
          ? setGalleryImages([...hits])
          : setGalleryImages(state => [...state, ...hits]);

        setLoadMoreBtnShow(!PixabayApi.isLastPageChecking(page, totalHits));
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => {
        setError('Oops, Something Went Wrong');
        setStatus(STATUS.ERROR);
      })
      .finally(() => {
        scrollTo();
      });
  }, [page, query]);

  const isShowLoader = status === STATUS.PENDING;
  const isShowError = status === STATUS.ERROR;

  return (
    <AppContainer>
      <Searchbar onSubmit={newQuery => setQuery(newQuery)} />
      {!isShowError && <ImageGallery images={galleryImages} />}
      {isShowError && <Error>{error}</Error>}
      {LoadMoreBtnShow && (
        <Button handleIncrementPage={() => setPage(page => page + 1)} />
      )}
      {isShowLoader && <LoaderSpinner />}
    </AppContainer>
  );
};

export default App;

import { useState, useEffect, useRef } from 'react';
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
  const [page, setPage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const searchQuery = useRef('');
  const errorMessage = useRef('');
  const isLastPage = useRef(false);

  useEffect(() => {
    if (!page) return;

    setStatus(STATUS.PENDING);

    PixabayApi.fetchImages(searchQuery.current, page)
      .then(({ hits, totalHits }) => {
        page === 1
          ? setGalleryImages([...hits])
          : setGalleryImages(state => [...state, ...hits]);
        isLastPage.current = !PixabayApi.isLastPageChecking(page, totalHits);
        setStatus(STATUS.RESOLVED);
      })
      .catch(error => {
        errorMessage.current = error.message;
        setStatus(STATUS.ERROR);
      })
      .finally(() => {
        scrollTo();
      });
  }, [page]);

  const isError = status === STATUS.ERROR;
  const isShowLoader = status === STATUS.PENDING;
  const isShowButton = status === STATUS.RESOLVED && isLastPage.current;

  /*func for updating query-key and reset page*/
  const onNewQuerySubmit = newQuery => {
    searchQuery.current = newQuery;
    setPage(1);
  };

  return (
    <AppContainer>
      <Searchbar onSubmit={onNewQuerySubmit} />
      {!isError && <ImageGallery images={galleryImages} />}
      {isError && <Error>{errorMessage.current}</Error>}
      {isShowButton && (
        <Button handleIncrementPage={() => setPage(page => page + 1)} />
      )}
      {isShowLoader && <LoaderSpinner />}
    </AppContainer>
  );
};

export default App;

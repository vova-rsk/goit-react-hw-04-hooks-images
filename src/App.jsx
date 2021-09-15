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
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [status, setStatus] = useState(STATUS.IDLE);
  const errorMessage = useRef('');
  const isLastPage = useRef(false);

  /*setting default values when changing the query-key */
  useEffect(() => {
    if (!query) return;
    setPage(1);
  }, [query]);

  /*getting a new group of pictures when changing the page number*/
  useEffect(() => {
    if (!page) return;

    setStatus(STATUS.PENDING);

    PixabayApi.fetchImages(query, page)
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
  }, [page, query]);

  const isError = status === STATUS.ERROR;
  const isShowLoader = status === STATUS.PENDING;
  const isShowButton = status === STATUS.RESOLVED && isLastPage.current;

  return (
    <AppContainer>
      <Searchbar onSubmit={newQuery => setQuery(newQuery)} />
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

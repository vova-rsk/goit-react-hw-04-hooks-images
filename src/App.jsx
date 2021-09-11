import { useState } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import AppContainer from './App.styled';
import LoaderSpinner from './components/Loader';

const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
  ERROR: 'error',
};

const App = () => {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState(STATUS.IDLE);
  const [error, setError] = useState('');

  /*func for getting query-data from components*/
  const fetchQueryUpdate = query => {
    setQuery(query);
  };

  /*func for setting status in local state*/
  const statusChanging = statusName => {
    setStatus(statusName);
  };

  /*func for setting error-message in local state*/
  const setErrorMessage = message => {
    setError(message);
  };

  const isShowLoader = status === 'pending' ? true : false;
  const isShowError = status === STATUS.ERROR ? true : false;

  return (
    <AppContainer>
      <Searchbar onSubmit={fetchQueryUpdate} />
      {!isShowError && (
        <ImageGallery
          query={query}
          statusChanging={statusChanging}
          setErrorMessage={setErrorMessage}
          currentStatus={status}
        />
      )}
      {isShowError && <div>{error}</div>}
      {isShowLoader && <LoaderSpinner />}
    </AppContainer>
  );
};

export default App;

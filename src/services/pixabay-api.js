const KEY = '22441039-e3c3a22ef42346706974d6393';
const BASE_URL = 'https://pixabay.com/api/';
const ITEMS_PER_PAGE = 12;

const fetchImages = (query, page) => {
  const searchParams = new URLSearchParams({
    q: query,
    page,
    key: KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    per_page: ITEMS_PER_PAGE,
  });

  return fetch(`${BASE_URL}?${searchParams.toString()}`).then(response => {
    if (!response.ok) {
      return Promise.rejected(new Error('Oops, something went wrong!'));
    }
    return response.json();
  });
};

const isLastPageChecking = (currentPage, totalQuentity) => {
  return currentPage * ITEMS_PER_PAGE >= totalQuentity;
};

const api = {
  fetchImages,
  isLastPageChecking,
};

export default api;

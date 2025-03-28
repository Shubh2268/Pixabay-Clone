const API_KEY = '41895623-1d78e1c7f668aecdd84166fa1';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = async (query = '', page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo&per_page=20&page=${page}`
    );
    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    return [];
  }
};

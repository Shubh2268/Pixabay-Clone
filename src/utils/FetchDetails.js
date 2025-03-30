const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;
const BASE_URL = 'https://pixabay.com/api/';

export const fetchDetails = async (imageId) => {
  try {
    const response = await fetch(`${BASE_URL}?key=${API_KEY}&id=${imageId}`);
    const data = await response.json();

    if (data.hits && data.hits.length > 0) {
      return data.hits[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching image details:', error);
    return null;
  }
};

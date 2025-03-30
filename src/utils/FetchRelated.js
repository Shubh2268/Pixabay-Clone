const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;
const BASE_URL = 'https://pixabay.com/api/';

export const fetchRelated = async (query) => {
    try {
      const response = await fetch(
        `${BASE_URL}?key=${API_KEY}&q=${query}&image_type=photo`
      );
      const data = await response.json();
      return data.hits;
    } catch (error) {
      console.error("Error fetching related images:", error);
      return [];
    }
  };
  
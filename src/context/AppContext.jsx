import { createContext, useState, useEffect, useCallback } from 'react';
import { fetchImages } from '../utils/FetchImages';
import { fetchDetails } from '../utils/FetchDetails';
import { fetchRelated } from '../utils/FetchRelated';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('trending');
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [imageDetails, setImageDetails] = useState(null);
  const [relatedImages, setRelatedImages] = useState([]);

  // Favorites - load from localStorage on first load
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('favorites');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Fetch Images whenever query or page changes
  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      const data = await fetchImages(query, page);
      setImages(data);
      setLoading(false);
    };

    loadImages();
  }, [query, page]);

  // Update search query
  const updateQuery = (newQuery) => {
    if (newQuery !== query) {
      setQuery(newQuery);
      setPage(1); // reset page
    }
  };

  // Fetch image details
  const getImageDetails = useCallback(async (imageId) => {
    if (!imageId) return;

    setLoading(true);
    setImageDetails(null);

    const details = await fetchDetails(imageId);
    setImageDetails(details);

    setLoading(false);
  }, []);

  // Fetch Related images
  const getRelatedImages = useCallback(async (imageTags) => {
    if (!imageTags) return;

    setRelatedImages([]);

    const related = await fetchRelated(imageTags);
    setRelatedImages(related);
  }, []);

  // Pagination Control
  const nextPage = () => setPage((prevPage) => prevPage + 1);
  const prevPage = () => setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));

  // Toggle Favorite
  const toggleFavorite = (image) => {
    const exists = favorites.find((fav) => fav.id === image.id);
    if (exists) {
      // If already liked, remove it
      setFavorites(favorites.filter((fav) => fav.id !== image.id));
    } else {
      // Else, add it to favorites
      setFavorites([...favorites, image]);
    }
  };

  // To check if image is liked 
  const isFavorite = (id) => {
    return favorites.some((fav) => fav.id === id);
  };

  return (
    <AppContext.Provider
      value={{
        images,
        query,
        updateQuery,
        loading,
        page,
        nextPage,
        prevPage,
        imageDetails,
        relatedImages,
        getImageDetails,
        getRelatedImages,
        favorites,
        toggleFavorite,
        isFavorite,
      }}>
      {children}
    </AppContext.Provider>
  );
};

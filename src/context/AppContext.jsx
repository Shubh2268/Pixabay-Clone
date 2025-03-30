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

  // Fetch images when query or page changes
  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      const data = await fetchImages(query, page);
      setImages(data);
      setLoading(false);
    };

    loadImages();
  }, [query, page]);

  // Update search query and reset page
  const updateQuery = (newQuery) => {
    if (newQuery !== query) {
      setQuery(newQuery);
      setPage(1);
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

  // Fetch related images
  const getRelatedImages = useCallback(async (imageTags) => {
    if (!imageTags) return;

    setRelatedImages([]);

    const related = await fetchRelated(imageTags);
    setRelatedImages(related);
  }, []);

  // Pagination controls
  const nextPage = () => setPage((prevPage) => prevPage + 1);
  const prevPage = () => setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));

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
      }}>
      {children}
    </AppContext.Provider>
  );
};

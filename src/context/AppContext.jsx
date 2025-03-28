import { createContext, useState, useEffect } from 'react';
import { fetchImages } from '../utils/FetchImages';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const [images, setImages] = useState([]);
  const [query, setQuery] = useState(''); 
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  // Fetch images whenever query or page changes
  useEffect(() => {
    const loadImages = async () => {
      setLoading(true);
      const data = await fetchImages(query, page);
      setImages(data);
      setLoading(false);
    };

    loadImages();
  }, [query, page]);

  return (
    <AppContext.Provider value={{ images, query, setQuery, loading, page, setPage }}>
      {children}
    </AppContext.Provider>
  );
};

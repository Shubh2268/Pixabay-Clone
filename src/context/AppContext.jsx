import { createContext, useState, useEffect } from 'react';
import { fetchImages } from '../utils/FetchImages';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('trending');
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

  // Function to the next page
  const nextPage = () => setPage((prevPage) => prevPage + 1);

  // Function to the previous page
  const prevPage = () => setPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));

  return (
    <AppContext.Provider value={{ images, query, setQuery, loading, page, setPage, nextPage, prevPage }}>
      {children}
    </AppContext.Provider>
  );
};

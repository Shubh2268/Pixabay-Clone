import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';

const SearchBar = () => {
  const { updateQuery } = useContext(AppContext);
  const [searchTerm, setSearchTerm] = useState('');

  // Handle form submit
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== '') {
      updateQuery(searchTerm);
    }
  };

  return (
    <form onSubmit={handleSearch} className='w-full flex items-center justify-center'>
      <input
        type='text'
        placeholder='Search for images...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className='w-full max-w-lg px-4 py-2 md:py-3 border-y border-l border-gray-300 rounded-l-full backdrop-blur-lg text-white focus:outline-none'
      />

      <button type='submit' className='px-3 md:px-6 py-2 md:py-3 border border-gray-300 bg-green-500 text-white font-semibold rounded-r-full hover:bg-green-600 transition cursor-pointer'>Search</button>
    </form>
  );
};

export default SearchBar;

import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favorites = [], toggleFavorite } = useContext(AppContext);

  return (
    <section className='container mx-auto px-6 py-10 mt-16 md:mt-20 min-h-screen'>
      <h2 className='text-2xl md:text-3xl font-bold text-center text-gray-800 mb-6'>
        Your Favorite Images
      </h2>

      {favorites.length === 0 ? (
        <p className='text-center text-gray-600'>
          You haven't added any favorites yet.
        </p>
      ) : (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
          {favorites.map((image) => {
            const tagsArray = image.tags.split(',').slice(0, 5);

            return (
              <div key={image.id} className='relative shadow-md group'>
                {/* Image Link */}
                <Link to={`/details/${image.id}`}>
                  <img src={image.webformatURL} alt={image.tags} className='w-full h-full object-cover'/>
                </Link>

                {/* Tags */}
                <div className='absolute bottom-2 left-2 flex flex-wrap gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                  {tagsArray.map((tag, index) => (
                    <span key={index} className='text-white px-2 py-0.5 text-sm'>
                      {tag.trim()}
                    </span>
                  ))}
                </div>

                {/* Remove Button */}
                <button onClick={() => toggleFavorite(image)} className='absolute top-2 right-2 bg-red-500 text-white text-xs font-medium px-2 py-1 rounded hover:bg-red-600 transition-opacity opacity-0 group-hover:opacity-100'>Remove</button>
              </div>
            );
          })}
        </div>
      )}
    </section>
  );
};

export default Favorites;

import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';

const Favorites = () => {
  const { favorites, removeFavorite } = useContext(AppContext);

  return (
    <section className='container mx-auto px-6 py-10 h-screen'>
      <h2 className='text-3xl font-bold text-center text-gray-800 mb-6'>
        Your Favorite Images
      </h2>

      {favorites.length === 0 ? (
        <p className='text-center text-gray-600'>You haven't added any favorites yet.</p>
      ) : (
        <>
          {/* Image Grid */}
          <div className='columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4'>
            {favorites.map((image) => {
              const tagsArray = image.tags.split(',').slice(0, 5);

              return (
                <div key={image.id} className='relative overflow-hidden shadow-md group gap-4 space-y-4'>
                  {/* Link to Details */}
                  <Link to={`/details/${image.id}`}>
                    <img
                      src={image.webformatURL}
                      alt={image.tags}
                      className='w-full h-auto object-cover transition-transform duration-700 ease-in-out'
                    />
                  </Link>

                  {/* Tags */}
                  <div className='absolute bottom-3 left-2 flex flex-wrap gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    {tagsArray.map((tag, index) => (
                      <span key={index} className='text-white bg-black/40 px-2 py-0.5 text-xs rounded'>
                        {tag.trim()}
                      </span>
                    ))}
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFavorite(image.id)}
                    className='absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded hover:bg-red-600 transition-opacity opacity-0 group-hover:opacity-100'
                  >
                    Remove
                  </button>
                </div>
              );
            })}
          </div>
        </>
      )}
    </section>
  );
};

export default Favorites;

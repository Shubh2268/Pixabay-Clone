import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router';

const Gallery = () => {
    const { images, loading, page, nextPage, prevPage, query, toggleFavorite, isFavorite } = useContext(AppContext);

    return (
        <section className='container mx-auto px-6 py-10'>
            <h2 className='text-3xl font-bold text-center text-gray-800 mb-6 capitalize'>
                {query} images
            </h2>

            {loading ? (
                <div className='h-screen flex items-center justify-center'>
                    <p className='text-center text-gray-900'>Loading...</p>
                </div>
            ) : (
                <>
                    {/* Image Grid */}
                    <div className='columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4'>
                        {images.map((image) => {
                            const tagsArray = image.tags.split(',').slice(0, 5);
                            const liked = isFavorite(image.id);

                            return (
                                <div key={image.id} className='relative group break-inside-avoid'>
                                    {/* Like Button */}
                                    <button onClick={() => toggleFavorite(image)}className='absolute top-2 right-2 z-10 bg-white rounded-full p-1 shadow hover:scale-110 transition-transform'>
                                        {liked ? '❤️' : '🤍'}
                                    </button>

                                    {/* Image Link */}
                                    <Link to={`/details/${image.id}`} className='block overflow-hidden shadow-md group'>
                                        <img src={image.webformatURL} alt={image.tags}className='w-full h-auto object-cover transition-transform duration-700 ease-in-out'/>

                                        {/* Tags */}
                                        <div className='absolute bottom-3 left-2 flex flex-wrap gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                            {tagsArray.map((tag, index) => (
                                                <span key={index} className='text-gray-100 text-sm md:text-base m-1'>
                                                    {tag.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>

                    {/* Pagination */}
                    <div className='flex justify-center items-center gap-4 my-8'>
                        <button onClick={prevPage} disabled={page === 1} className={`px-4 py-1 border-2 border-green-500 rounded-md font-semibold transition ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-500 hover:text-white'}`}>&lt; Prev</button>

                        <span className='text-lg font-semibold text-gray-800'>Page {page}</span>

                        <button onClick={nextPage} className='px-4 py-1 border-2 border-green-500 rounded-md font-semibold transition hover:bg-green-500 hover:text-white'>Next &gt;</button>
                    </div>
                </>
            )}
        </section>
    );
};

export default Gallery;

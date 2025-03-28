import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Gallery = () => {
    const { images, loading } = useContext(AppContext);

    return (
        <section className='container mx-auto px-6 py-10'>
            <h2 className='text-3xl font-bold text-center text-gray-800 mb-6'>
                Trending Images
            </h2>

            {loading ? (
                <p className='text-center text-gray-500'>Loading...</p>
            ) : (
                <div className='columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4'>
                    {images.map((image) => {
                        const tagsArray = image.tags.split(',').slice(0, 5);

                        return (
                            <div key={image.id} className='relative overflow-hidden shadow-md group'>
                                {/* Image */}
                                <img src={image.webformatURL} alt={image.tags}className='w-full h-auto object-cover transition-transform duration-300 ease-in-out group-hover:scale-105'/>

                                {/* Tags */}
                                <div className='absolute bottom-3 left-2 flex flex-wrap gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                    {tagsArray.map((tag, index) => (
                                        <span key={index} className='text-gray-100 text-sm md:text-base m-1 '>
                                            {tag.trim()}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </section>
    );
};

export default Gallery;

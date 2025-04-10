import { useEffect, useContext } from 'react';
import { useParams, useNavigate } from 'react-router';
import { AppContext } from '../context/AppContext';
import { MdFavoriteBorder   } from 'react-icons/md';
import { FcLike } from 'react-icons/fc';

const Details = () => {
  const {imageDetails, getImageDetails, loading, relatedImages, getRelatedImages, toggleFavorite, isFavorite} = useContext(AppContext);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getImageDetails(id);
  }, [id]);

  useEffect(() => {
    if (imageDetails?.tags) {
      getRelatedImages(imageDetails.tags.split(',')[0]);
    }
  }, [imageDetails]);

  if (loading) return <p className='text-center text-gray-800 h-screen'>Loading...</p>;
  if (!imageDetails) return <p className='text-center text-red-500'>Image not found</p>;

  const liked = isFavorite(imageDetails.id);

  return (
    <div className='bg-gray-100'>
      <div className='max-w-screen-xl mx-auto px-4 py-24 md:py-32'>
        {/* Top Section - Image and Details */}
        <div className='flex flex-col md:flex-row gap-10'>
          {/* Left: Image */}
          <div className='md:w-2/3 relative'>
            <img src={imageDetails.largeImageURL} alt={imageDetails.tags} className='w-full max-h-4/5 shadow-lg'/>

            {/* Like Button on Image */}
            <button onClick={() => toggleFavorite(imageDetails)} className='absolute top-3 right-3 z-10 bg-white rounded-full p-2 shadow-md transition'>
              {liked ? <FcLike size={20} /> : <MdFavoriteBorder size={20} />}
            </button>

            {/* Left: Info */}
            <div className='mt-4 flex flex-wrap gap-4'>
              <a href={imageDetails.largeImageURL} download className='bg-green-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-600 transition'>Download</a>

              {imageDetails.imageWidth && (
                <div className='text-sm text-gray-600 mt-2'>
                  🖼️ Resolution: {imageDetails.imageWidth}x{imageDetails.imageHeight} | 📦 File Size:{' '}
                  {Math.round(imageDetails.imageSize / 1024)} KB
                </div>
              )}
            </div>
          </div>

          {/* Right: Info */}
          <div className='w-full md:w-2/5 h-fit border border-green-400 bg-white p-5 md:p-8 rounded-2xl'>
            <h2 className='text-lg md:text-2xl font-semibold'>
              📷 Photo: <span className='font-bold'>{imageDetails.user}</span>
            </h2>

            {/* Tags */}
            <div className='mt-4'>
              <h4 className='font-semibold'>🏷️ Tags:</h4>
              <div className='flex flex-wrap gap-2 mt-2'>
                {imageDetails.tags.split(',').map((tag) => (
                  <span key={tag} className='text-blue-500 cursor-pointer hover:underline' onClick={() => navigate(`/search/${tag.trim()}`)}>
                    #{tag.trim()}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className='mt-6 space-y-2 text-gray-700 font-medium'>
              <p className='text-gray-600'>👁️ Views: <span className='text-black'>{imageDetails.views}</span></p>
              <p className='text-gray-600'>⭐ Likes: <span className='text-black'>{imageDetails.likes}</span></p>
              <p className='text-gray-600'>❤️ Favorites: <span className='text-black'>{imageDetails.favorites}</span></p>
              <p className='text-gray-600'>⬇ Downloads: <span className='text-black'>{imageDetails.download}</span></p>
            </div>

            {/* Favorite Button */}
            <button onClick={() => toggleFavorite(imageDetails)} className='mt-6 w-fit px-4 py-2 rounded-md font-semibold border border-green-500 bg-green-500 text-white outline-none transition active:scale-95'>
              {isFavorite(imageDetails.id) ? 'Remove Favorite' : 'Add to Favorites'}
            </button>
          </div>

        </div>

        {/* Related Images */}
        <div className='mt-16'>
          <h3 className='text-xl font-semibold mb-6'>Related Images</h3>
          <div className='flex flex-wrap justify-center md:justify-normal gap-4'>
            {relatedImages.map((image) => (
              <img key={image.id} src={image.largeImageURL} alt={image.tags} className='w-36 h-24 md:w-48 md:h-32 lg:w-56 lg:h-40 object-cover cursor-pointer transition' onClick={() => navigate(`/details/${image.id}`)}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

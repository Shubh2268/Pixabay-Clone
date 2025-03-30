import { useEffect, useContext } from 'react';
import { useParams } from 'react-router';
import { AppContext } from '../context/AppContext';

const Details = () => {
  const { id } = useParams();
  const { imageDetails, getImageDetails, loading } = useContext(AppContext);

  useEffect(() => {
    getImageDetails(id);
  }, [id, getImageDetails]);

  if (loading || !imageDetails) return <p className='text-center mt-10'>Loading...</p>;

  return (
    <div className='container mx-auto px-6 py-10 text-center'>

      <h2 className='text-3xl font-bold text-gray-800 mb-4'>Image Details</h2>

      <img src={imageDetails.largeImageURL} alt={imageDetails.tags} className='max-w-full mx-auto rounded-lg shadow-md' />

      <p className='text-gray-700 mt-2'>Tags: {imageDetails.tags}</p>

      <a href={imageDetails.largeImageURL} download className='mt-4 inline-block px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition'>Download Image</a>
      
    </div>
  );
};

export default Details;

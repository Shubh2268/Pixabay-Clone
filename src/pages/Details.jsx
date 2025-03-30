import { useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { AppContext } from '../context/AppContext';

const Details = () => {
  const { id } = useParams();
  const { getImageDetails, imageDetails, loading } = useContext(AppContext);

  useEffect(() => {
    getImageDetails(id);
  }, [id]);

  if (loading || !imageDetails) return <p>Loading...</p>;

  return (
    <div className='max-w-7xl mx-auto h-screen mt-5 p-4 flex items-center justify-center flex-col md:flex-row gap-6'>
      {/* Left Side: Large Image */}
      <div className='w-full md:w-3/4'>
        <img
          src={imageDetails.largeImageURL}
          alt='Detailed view'
          className='w-full h-auto rounded-lg'
        />
      </div>

      {/* Right Sidebar */}
      <div className='w-full md:w-1/4 flex flex-col gap-4 bg-white p-4 shadow-md rounded-lg'>
        {/* Download Section */}
        <div className='border rounded-lg p-3'>
          <p className='text-sm text-gray-600'>Free for use under the Pixabay Content License</p>
          <button className='w-full bg-green-500 text-white py-2 mt-2 rounded-md'>
            Download
          </button>
        </div>

        {/* Resolution Selection (Dropdown) */}
        <div className='border rounded-lg p-3'>
          <p className='font-semibold mb-2'>Download Options</p>
          <select className='w-full p-2 border rounded'>
            <option value='640x426'>640×426 JPG (106 KB)</option>
            <option value='1280x853' selected>1280×853 JPG (349 KB)</option>
            <option value='1920x1280'>1920×1280 JPG (740 KB)</option>
            <option value='6000x4000'>6000×4000 JPG (8.9 MB)</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Details;

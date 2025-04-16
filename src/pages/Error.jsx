import { Link } from 'react-router';
import errorImage from '../assets/errorImage.svg'

const Error = () => {
    return (
        <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 py-12 text-center'>
            
            <img src={errorImage} alt='404 Not Found' className='w-full max-w-md mb-8'/>

            <h1 className='text-2xl md:text-3xl font-bold text-gray-800 mb-4'>404 - Page Not Found</h1>
            <p className='text-gray-600 text-md md:text-lg mb-6'>Sorry, the page you are looking for doesn't exist or has been moved.</p>

            <Link to='/' className='inline-block bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md text-sm font-semibold transition'>Go Back Home</Link>
        </div>
    );
};

export default Error;

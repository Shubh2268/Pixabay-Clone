import bgImage from '../assets/bgImage.jpg';
import SearchBar from './SearchBar';
import TrendingTags from './TrendingTags';

const Header = () => {
  return (
    <header
      className='relative bg-cover bg-center text-white min-h-[60vh] md:min-h-[80vh] flex flex-col justify-center items-center text-center px-6'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-black opacity-50' />

      {/* Centered Content */}
      <div className='relative z-10 max-w-5xl'>
        <h1 className='text-4xl md:text-7xl font-extrabold text-gray-100'>
          Discover Stunning Images with <span className='text-green-400'>Pixora</span>
        </h1>
        <p className='my-2 md:my-4 text-gray-200'>
          Find high-quality images from Pixora with ease.
        </p>

        {/* Search Bar */}
        <div className='mt-6 w-full flex items-center justify-center'>
          <SearchBar />
        </div>
      </div>

      {/* Trending Tags */}
      <div className='relative z-10 w-full mt-4'>
        <TrendingTags />
      </div>
    </header>
  );
};

export default Header;

import bgImage from '../assets/bgImage.jpg'

const Header = () => {

  return (
    <header className='relative bg-cover bg-center py-24 md:py-28 text-center text-white'
      style={{ backgroundImage: `url(${bgImage})` }}>

      <div className='absolute inset-0 bg-black opacity-50'></div>

      <div className='relative z-10 max-w-5xl mx-auto px-6'>
        <h1 className='text-4xl md:text-7xl font-extrabold text-gray-100'>
          Discover Stunning Images with <span className='text-green-400 md:py-5'>Pixora</span>
        </h1>
        <p className='my-2 md:my-4 text-gray-200'>
          Find high-quality images from Pixora with ease.
        </p>

        {/* Search Bar */}
        <form className='mt-6 flex items-center justify-center'>
          <input
            type='text'
            placeholder='Search for images...'
            className='w-full max-w-lg px-4 py-2 md:py-3 border-2 border-green-500 rounded-l-full bg-gray-100 text-black focus:outline-none'
          />

          <button type='submit' className='px-6 py-2 md:py-3 border-2 border-green-500 bg-green-500 text-white font-semibold -ml-1 rounded-r-full hover:bg-green-600 transition'>Search</button>
        </form>
      </div>
    </header>
  );
};

export default Header;

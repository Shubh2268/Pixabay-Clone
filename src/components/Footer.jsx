import { Link } from 'react-router';
import { FaFacebook, FaTwitter, FaInstagram, FaCameraRetro } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-green-500 text-white py-8'>
      <div className='container mx-auto px-6 text-center md:text-left'>

        {/* Top Section */}
        <div className='flex flex-col md:flex-row justify-between items-center mb-6'>
          
          <Link to='/' className='text-3xl font-bold text-white flex items-center gap-2'>
            <span>pixora</span>
            <FaCameraRetro size={20} />
          </Link>

          {/* Quick Links */}
          <div className='mt-4 md:mt-0 flex gap-6 text-white'>
            <Link to='/'>Home</Link>
            <Link to='/favorites'>Favorites</Link>
          </div>

          {/* Social Icons */}
          <div className='flex gap-4 mt-4 md:mt-0'>
            <a href='#' className='text-white hover:text-gray-200'><FaFacebook size={20} /></a>
            <a href='#' className='text-white hover:text-gray-200'><FaTwitter size={20} /></a>
            <a href='#' className='text-white hover:text-gray-200'><FaInstagram size={20} /></a>
          </div>
        </div>

        {/* Divider */}
        <div className='border-t border-white my-4'></div>

        {/* Bottom Section */}
        <p className='text-sm text-white text-center'>
          &copy; {new Date().getFullYear()} Pixora. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

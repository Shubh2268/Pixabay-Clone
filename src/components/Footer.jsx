import { Link } from 'react-router';
import { MdHome, MdFavorite } from 'react-icons/md';
import { FaFacebook, FaTwitter, FaInstagram, FaCameraRetro } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-gray-100 text-black py-10'>
            <div className='container mx-auto px-6 text-center md:text-left'>

                {/* Top Section */}
                <div className='flex flex-col md:flex-row justify-between items-center mb-6'>

                    <Link to='/' className='flex items-center text-2xl sm:text-3xl font-bold py-1 px-3'>
                        <span className='mx-1'>pixora</span>
                        <FaCameraRetro size={20} />
                    </Link>

                    {/* Quick Links */}
                    <div className='mt-4 md:mt-0 flex gap-6 text-black'>
                        <Link to='/' className='flex items-center hover:text-green-300' onClick={() => setMenuOpen(false)}>
                            <MdHome size={20} />
                            <span className='ml-1'>Home</span>
                        </Link>
                        <Link to='/favorites' className='flex items-center hover:text-green-300' onClick={() => setMenuOpen(false)}>
                            <MdFavorite size={20} />
                            <span className='ml-1'>Favorites</span>
                        </Link>
                    </div>

                    {/* Social Icons */}
                    <div className='flex gap-4 mt-4 md:mt-0'>
                        <a href='#' className='text-blue-400'><FaFacebook size={20} /></a>
                        <a href='#' className='text-blue-300'><FaTwitter size={20} /></a>
                        <a href='#' className='text-pink-400'><FaInstagram size={20} /></a>
                    </div>
                </div>

                <div className='border-t border-gray-500 my-4'></div>

                <p className='text-sm text-black text-center'>
                    &copy; {new Date().getFullYear()} Pixora. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

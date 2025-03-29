import { Link } from 'react-router';
import { FaFacebook, FaTwitter, FaInstagram, FaCameraRetro } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='bg-black/80 text-white py-10'>
            <div className='container mx-auto px-6 text-center'>

                <Link to='/' className='flex items-center justify-center text-2xl sm:text-3xl font-bold py-1 px-3 active:scale-95 duration-300'>
                    <span className='mx-1'>pixora</span>
                    <FaCameraRetro size={22} />
                </Link>

                <p className='text-sm md:text-base text-gray-200 text-center max-w-xl md:max-w-2xl mx-auto mt-4 px-4'>
                    " Every image holds a story, a memory, or a dream waiting to be felt. Let these moments speak to your heart, inspire your soul, and remind you of the beauty in the world. "
                </p>

                {/* Social Media Icons */}
                <div className='flex justify-center gap-5 mt-6'>
                    <a href='#' className='text-blue-500 '><FaFacebook size={22} /></a>
                    <a href='#' className='text-blue-400 '><FaTwitter size={22} /></a>
                    <a href='#' className='text-pink-500 transition'><FaInstagram size={22} /></a>
                </div>

                <div className='border-t border-gray-400 my-6'></div>

                <p className='text-xs text-gray-200'>
                    &copy; {new Date().getFullYear()} Pixora. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

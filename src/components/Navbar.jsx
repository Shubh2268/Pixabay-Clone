import { Link } from 'react-router';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaCameraRetro } from 'react-icons/fa';
import { MdHome, MdFavorite } from 'react-icons/md';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle background color change on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 shadow-md' : ''
            }`}>
            <div className='px-5 flex items-center justify-between w-full h-16'>
                {/* Logo */}
                <div className='flex items-center text-white active:scale-95 duration-200'>
                    <Link to='/' className='flex items-center text-2xl sm:text-3xl font-bold py-1 px-3'>
                        <span className='mx-1'>pixora</span>
                        <FaCameraRetro size={20} />
                    </Link>
                </div>

                {/* Desktop Links */}
                <ul className='hidden md:flex'>
                    <Link to='/' className='flex items-center m-2 font-medium text-white hover:text-green-300'>
                        <MdHome size={20} />
                        <span className='ml-1'>Home</span>
                    </Link>
                    <Link to='/favorites' className='flex items-center m-2 font-medium text-white hover:text-green-300'>
                        <MdFavorite size={18} />
                        <span className='ml-1'>Favorites</span>
                    </Link>
                </ul>

                {/* Mobile Menu Icon */}
                <div className='md:hidden cursor-pointer text-white'>
                    <FiMenu onClick={() => setMenuOpen(true)} size={25} />
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className='fixed md:hidden inset-0 bg-black/50 backdrop-blur-sm' onClick={() => setMenuOpen(false)}>
                    <div className='fixed left-0 top-0 w-4/5 h-full bg-black/80 text-white p-10 transition-transform duration-300 ease-in-out'>
                       
                        <div className='flex justify-between items-center'>
                            <h2 className='text-3xl font-bold text-white'>pixora</h2>
                            <FiX size={25} className='cursor-pointer' onClick={() => setMenuOpen(false)} />
                        </div>

                        {/* Links */}
                        <ul className='mt-6 space-y-4'>
                            <Link to='/' className='flex items-center text-lg hover:text-green-300' onClick={() => setMenuOpen(false)}>
                                <MdHome size={20} />
                                <span className='ml-1'>Home</span>
                            </Link>
                            <Link to='/favorites' className='flex items-center text-lg hover:text-green-300' onClick={() => setMenuOpen(false)}>
                                <MdFavorite size={20} />
                                <span className='ml-1'>Favorites</span>
                            </Link>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

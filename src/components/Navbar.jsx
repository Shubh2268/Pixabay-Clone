import { Link } from 'react-router';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaCameraRetro } from 'react-icons/fa';
import { MdHome, MdFavorite } from 'react-icons/md';
import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='bg-black/80  w-full fixed top-0 left-0 z-50 transition-all duration-300'>
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
                    <Link to='/' className='flex items-center m-2 font-medium text-green-300 hover:text-green-400'>
                        <MdHome size={20} />
                        <span className='ml-1 text-white'>Home</span>
                    </Link>
                    <Link to='/favorites' className='flex items-center m-2 font-medium text-red-400 hover:text-red-500'>
                        <MdFavorite size={18} />
                        <span className='ml-1 text-white'>Favorites</span>
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
                    <div className='fixed left-0 top-0 w-4/5 h-full bg-black/80 text-white p-10 transition-transform ease-in-out'>

                        <div className='flex justify-between items-center'>
                            <Link to='/' className='flex items-center text-2xl sm:text-3xl font-bold py-1'>
                                <span className='mx-1'>pixora</span>
                                <FaCameraRetro size={20} />
                            </Link>
                            <FiX size={25} className='cursor-pointer' onClick={() => setMenuOpen(false)} />
                        </div>

                        {/* Links */}
                        <ul className='mt-6 space-y-6'>
                            <Link to='/' className='flex items-center font-medium text-green-300 hover:text-green-400'>
                                <MdHome size={20} />
                                <span className='ml-1 text-white'>Home</span>
                            </Link>
                            <Link to='/favorites' className='flex items-center font-medium text-red-400 hover:text-red-500'>
                                <MdFavorite size={18} />
                                <span className='ml-1 text-white'>Favorites</span>
                            </Link>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

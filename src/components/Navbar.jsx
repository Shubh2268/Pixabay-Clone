import { Link } from 'react-router';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaCameraRetro } from 'react-icons/fa';
import { MdOutlineHome, MdFavoriteBorder } from 'react-icons/md';
import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='w-full z-20 sticky bg-green-400/50'>
            <div className='px-5 flex items-center justify-between w-full h-full'>

                {/* Logo */}
                <div className='flex items-center text-white'>
                    <Link to='/' className='flex items-center text-2xl sm:text-3xl font-bold py-1 px-3 md:m-2'>
                        <span>pixora</span>
                        <FaCameraRetro size={25} />
                    </Link>
                </div>

                <ul className='hidden md:flex'>
                    <Link to='/' className='flex items-center justify-center m-2 font-medium text-white hover:text-green-300'>
                        <MdOutlineHome size={20} />
                        <span className='ml-1'>Home</span>
                    </Link>
                    <Link to='/favorites' className='flex items-center m-2 font-medium text-white hover:text-green-300'>
                        <MdFavoriteBorder size={18} />
                        <span className='ml-1'>Favorites</span>
                    </Link>
                </ul>

                {/* Mobile Menu icon */}
                <div className='md:hidden'>
                    <div className='cursor-pointer text-white'>
                        <FiMenu onClick={() => setMenuOpen(true)} size={25} />
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={menuOpen ? 'md:hidden fixed left-0 top-0 w-full h-full bg-gray-400/70 backdrop-blur' : ''}>
                <div className={menuOpen ? 'fixed left-0 top-0 w-4/5 h-full bg-gray-900/90 text-white p-10 ease-in duration-500' : 'fixed top-0 left-[-100%] h-full p-10 duration-500 ease-in'}>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <h2 onClick={() => setMenuOpen(false)} className='text-2xl font-bold text-green-500 cursor-pointer'>Pixora</h2>

                            <div className='p-3 cursor-pointer'>
                                <FiX onClick={() => setMenuOpen(false)} size={25} />
                            </div>
                        </div>

                        <ul className='flex flex-col mt-5 items-start justify-around'>
                            <Link to='/' onClick={() => setMenuOpen(false)} className='m-2 font-medium text-white hover:text-green-300'>Home</Link>

                            <Link to='/favorites' onClick={() => setMenuOpen(false)} className='m-2 font-medium text-white hover:text-green-300'>Favorites</Link>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

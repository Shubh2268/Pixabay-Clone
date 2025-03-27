import { Link } from 'react-router';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <div className='container mx-auto px-6 md:px-14 py-2 flex justify-between items-center'>
                {/* Logo */}
                <Link to='/' className='text-3xl font-bold text-green-400 flex items-center px-3 py-1'>Pixora</Link>

                {/* Mobile Menu Button */}
                <button className='md:hidden text-white text-2xl' onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* Navigation Links */}
                <div
                    className={`absolute md:relative top-16 md:top-auto left-0 w-full md:w-auto shadow-md md:shadow-none transition-all duration-300 ease-in-out transform origin-top ${menuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0'} md:opacity-100 md:scale-y-100 md:flex md:items-center md:gap-6 p-6 md:p-0`}>

                    <Link to='/' className='block text-green-400 font-medium py-2 md:py-0 text-center hover:text-green-500' onClick={() => setMenuOpen(false)}>
                        Home
                    </Link>

                    <Link to='/favorites' className='block text-green-400 font-medium py-2 md:py-0 text-center hover:text-green-500' onClick={() => setMenuOpen(false)}>
                        Favorites
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

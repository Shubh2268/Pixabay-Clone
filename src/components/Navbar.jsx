import { Link } from 'react-router';
import { FiMenu, FiX } from 'react-icons/fi';
import { useState } from 'react';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className='w-full z-20 fixed'>
            <div className='px-5 flex items-center justify-between w-full h-full'>

                {/* Logo */}
                <div className='flex items-center'>
                    <Link to='/' className='text-2xl sm:text-3xl font-bold py-2 text-green-500'>Pixora</Link>
                </div>

                <ul className='hidden md:flex'>
                    <Link to='/' className='m-2 font-medium text-white hover:text-green-300'>Home</Link>
                    <Link to='/favorites' className='m-2 font-medium text-white hover:text-green-300'>Favorites</Link>
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

import React, { useContext, useRef } from 'react';
import { AppContext } from '../context/AppContext';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TrendingTags = () => {
    const { updateQuery } = useContext(AppContext);
    const scrollRef = useRef(null);

    const categories = [
        'backgrounds', 'fashion', 'nature', 'science', 'education', 'feelings',
        'health', 'people', 'religion', 'places', 'animals', 'industry',
        'food', 'computer', 'sports', 'transportation', 'travel', 'buildings',
        'business', 'music'
    ];

    const handleClick = (category) => {
        updateQuery(category);
    };

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = direction === 'left' ? -200 : 200;
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className='bg-transparent py-3 relative max-w-5xl mx-auto'>
            {/* Left Arrow */}
            <button onClick={() => scroll('left')} className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 cursor-pointer'>
                <FaChevronLeft size={10} />
            </button>

            {/* Tags */}
            <div ref={scrollRef} className='overflow-x-auto no-scrollbar px-10'>
                <div className='flex w-max space-x-2'>
                    {categories.map((category, index) => (
                        <button key={index} onClick={() => handleClick(category)} className='backdrop-blur-lg text-gray-200 py-1 md:py-1.5 px-2 md:px-4 rounded-lg border border-gray-300 text-[9px] md:text-xs whitespace-nowrap transition hover:bg-white/10 focus:bg-green-400/70 focus:text-white'>
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Right Arrow */}
            <button onClick={() => scroll('right')} className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/80 cursor-pointer'>
                <FaChevronRight size={10} />
            </button>
        </div>
    );
};

export default TrendingTags;

import React from 'react';
import { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const TrendingTags = () => {
    const { updateQuery } = useContext(AppContext);

    const categories = [
        'backgrounds', 'fashion', 'nature', 'science', 'education', 'feelings',
        'health', 'people', 'religion', 'places', 'animals', 'industry',
        'food', 'computer', 'sports', 'transportation', 'travel', 'buildings',
        'business', 'music'
    ];

    const handleClick = (category) => {
        updateQuery(category);
    };

    return (
        <div className='bg-transparent py-3'>
            <div className='max-w-4xl mx-auto'>
                <div className='overflow-x-auto no-scrollbar'>
                    <div className='flex w-max space-x-2 px-4'>
                        {categories.map((category, index) => (
                            <button key={index} onClick={() => handleClick(category)} className='bg-gray-100 text-gray-700 py-1.5 px-4 rounded-full text-sm hover:bg-gray-200 border border-gray-300 whitespace-nowrap transition'> {category.charAt(0).toUpperCase() + category.slice(1)} </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingTags;

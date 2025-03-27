const demoImages = [
    'https://images.unsplash.com/photo-1741851374411-9528e6d2f33f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1741851374411-9528e6d2f33f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1741851374411-9528e6d2f33f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1741851374411-9528e6d2f33f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1741851374411-9528e6d2f33f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
];

const Gallery = () => {
    return (
        <section className='container mx-auto px-6 py-10'>
            <h2 className='text-3xl font-bold text-center text-gray-800 mb-6'>Trending Images</h2>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {demoImages.map((src, index) => (
                    <img key={index} src={src} alt='Demo' className='w-full h-auto rounded-md shadow-md' />
                ))}
            </div>
        </section>
    );
};

export default Gallery;

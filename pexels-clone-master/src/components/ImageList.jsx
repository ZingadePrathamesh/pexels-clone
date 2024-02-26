import React, { useEffect, useState } from 'react';
import { createClient } from 'pexels';
import { IoIosArrowDown, IoIosClose } from 'react-icons/io';

const client = createClient('PJjxFxvwiSH7ft7Vznm66YqvB9HIfQc9LcZvzDnDCKJWQKs0OunMjyfT');

const ImageList = (props) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await client.photos.search({ query: props.query, per_page: 15 });
        setData(response.photos);
      } catch (error) {
        console.error('Error fetching images:', error);
        setError('Error fetching images. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [props.query]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const openFullScreen = (index) => {
    setSelectedImage(index);
  };

  const closeFullScreen = () => {
    setSelectedImage(null);
  };

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-row justify-between items-center px-36 mb-12' style={{ width: '100%' }}>
        <h3 className='text-4xl font-semibold'>Free Stock Photos </h3>
        <button className='flex flex-row px-8 text-2xl border-black rounded-sm py-4 items-center'>Trending <IoIosArrowDown /></button>
      </div>
      <div className='w-[100vw] grid grid-cols-1 md:grid-cols-3 justify-center '>
        
      {[0, 1, 2].map((columnIndex) => (
          <div key={columnIndex} className='m-2'>
            {data.map((photo, index) => {
              // Display photo only if it belongs to the current column
              if (index % 3 === columnIndex) {
                return (
                  <img
                    key={index}
                    src={photo.src.large2x}
                    alt={`Image ${index}`}
                    className='mb-8 cursor-pointer'
                    onClick={() => openFullScreen(index)}
                  />
                );
              }
              return null;
            })}
          </div>
        ))}
      </div>




      {selectedImage !== null && (
        <div className='fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-75 flex items-center justify-center' onClick={closeFullScreen}>
          <button className='absolute top-4 right-4 text-white' onClick={closeFullScreen}>
            <IoIosClose size={32} />
          </button>
          <img src={data[selectedImage].src.large2x} alt={`Image ${selectedImage}`} className='max-w-full max-h-full' />
        </div>
      )}
    </div>
  );
};

export default ImageList;

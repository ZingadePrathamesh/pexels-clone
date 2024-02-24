import React, { useEffect, useState } from 'react';
import { createClient } from 'pexels';

const client = createClient('PJjxFxvwiSH7ft7Vznm66YqvB9HIfQc9LcZvzDnDCKJWQKs0OunMjyfT');

const ImageList = () => {
  const [data, setData] = useState([]);
  const [query, setquery] = useState('Nature');
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("fetching");
        const response = await client.photos.search({ query, per_page: 15 });
        console.log("fetched");
        setData(response.photos);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
    setquery(localStorage.getItem("query"))

    fetchData();
  }, [query]);

  return (
    <div className='w-[100vw] h-[50vh] grid grid-cols-1 md:grid-cols-3 mx-auto justify-center'>
      {[0, 1, 2].map((columnIndex) => (
        <div key={columnIndex} className='m-2'>
          {data.map((photo, index) => {
            // Display photo only if it belongs to the current column
            if (index % 3 === columnIndex) {
              return (
                <img
                  key={index}
                  src={photo.src.original}
                  alt={`Dummy Image ${index}`}
                  className='m-8'
                />
              );
            }
            return null;
          })}
        </div>
      ))}
    </div>
  );
};

export default ImageList;

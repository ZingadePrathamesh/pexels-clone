import React, { useEffect, useState } from 'react';
import { createClient } from 'pexels';
import { IoIosArrowDown } from "react-icons/io";

const client = createClient('PJjxFxvwiSH7ft7Vznm66YqvB9HIfQc9LcZvzDnDCKJWQKs0OunMjyfT');

const ImageList = () => {
  const [data, setData] = useState([]);
  const [query, setquery] = useState(localStorage.getItem("query"));
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("fetching");
        const response = await client.photos.search({ query, per_page: 15 });
        console.log("fetched");
        console.log(response);
        setData(response.photos);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };
  
    fetchData();
  }, [localStorage]);

  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='flex flex-row justify-between items-center px-36 mb-12' style={{width:"100%"}}>
        <h3 className='text-4xl font-semibold'>Free Stock Photos </h3>
        <button className='flex flex-row px-8 text-2xl border-black rounded-sm py-4 items-center'>Trending <IoIosArrowDown /></button>
      </div>
      <div className='w-[100vw] grid grid-cols-1 md:grid-cols-3 px-36 justify-center '>
          {[0, 1, 2].map((columnIndex) => (
            <div key={columnIndex} className='m-2'>
              {data.map((photo, index) => {
                // Display photo only if it belongs to the current column
                if (index % 3 === columnIndex) {
                  return (
                    <img
                      key={index}
                      src={photo.src.large2x}
                      alt={`Dummy Image ${index}`}
                      className='mb-8'
                    />
                  );
                }
                return null;
              })}
            </div>
          ))}
        </div>
    </div>
    
  );
};

export default ImageList;

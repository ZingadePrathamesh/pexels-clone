import React, { useEffect } from 'react';

const ImageList = () => {
  const arr = [...Array(4)];

  useEffect(() => {
    // You can perform any additional logic or API calls here if needed
  }, []); // empty dependency array to make sure it runs only once on mount

  return (
    <div className='w-[100vw] h-[50vh] grid grid-cols-1 md:grid-cols-3 mx-auto'>
      {arr.map((_, index) => (
        <img
          key={index}
          src='https://hub.dummyapis.com/image?text=600X600&height=600&width=600'
          alt={`Dummy Image ${index}`}
          width={450}
          height={100}
          className='m-5 '
        />
      ))}
    </div>
  );
}

export default ImageList;

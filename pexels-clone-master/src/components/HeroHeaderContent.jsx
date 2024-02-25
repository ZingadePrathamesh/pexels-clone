import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";

const HeroHeaderContent = () => {

    const [inputValue, setInputValue] = useState("");
    const history = useNavigate();

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const search = () => {
        history(`/search?query=${encodeURIComponent(inputValue)}`);
    }
    
    return (
        <>
        <div className='flex flex-col items-center'>

            <header className="text-white md:py-4 py-1 items-start">
                <div className="container mx-auto text-center md:w-[40vw] items-start">
                    <h1 className="text-xl md:text-4xl font-bold mb-8">The best free stock photos, royalty free images & videos shared by creators.</h1>
                    <div className=" bg-white flex rounded-lg flex-row justify-between items-center">
                        <button onClick={search} className="bg-neutral-200 mx-2 my-2 text-2xl text-gray-900 p-2 px-4 rounded-lg flex-2">Photos </button>
                        <input type="text" className="flex-6 border-none text-2xl text-gray-500 font-semibold flex-grow h-max border-gray-300 focus:outline-none" onChange={handleInputChange} placeholder="Search for free photos" />
                        <IoMdSearch style={{ width:"36px" , height:"36px" , color:"gray", marginRight:"8px"}} />
                    </div>
                </div>
            </header>
                <div className="text-center flex flex-row justify-start items-center" id='trending'>
                    <p className="text-[0.75rem] md:text-2xl text-gray-400 font-semibold" >Trending:  </p>
                    <ul className="flex justify-center mx-1 md:text-2xl">
                        <li className="mr-2"><a href="#" onClick={()=> localStorage.setItem("query", "Nature")} className="text-white hover:underline">Nature</a>,</li>
                        <li className="mr-2"><a href="#" onClick={()=> localStorage.setItem("query", "City")} className="text-white hover:underline">City</a>,</li>
                        <li className="mr-2"><a href="#" onClick={()=> localStorage.setItem("query", "Technology")} className="text-white hover:underline">Technology</a>,</li>
                        <li className="mr-2"><a href="#" onClick={()=> localStorage.setItem("query", "Travel")} className="text-white hover:underline">Travel</a>,</li>
                        <li><a href="#" onClick={()=> localStorage.setItem("query", "Business")} className="text-white hover:underline">Business</a></li>
                    </ul>
                </div>
        </div>
        </>
    )
}

export default HeroHeaderContent;

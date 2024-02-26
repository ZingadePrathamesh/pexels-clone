import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { IoMdSearch } from "react-icons/io";
import ImageList from './ImageList';

const SearchResults = () => {

    const [inputValue, setInputValue] = useState("");
    const history = useNavigate();
    const { query } = useParams();

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    }

    const search = () => {
        history(`/search/${encodeURIComponent(inputValue)}`);
    }

    return (
        <>
            <div className='flex flex-col mt-[5rem] justify-center items-center'>
                <div className=" bg-white flex rounded-lg flex-row justify-between items-center border-2">
                    <button onClick={search} className="bg-neutral-200 mx-2 my-2 text-2xl text-gray-900 p-2 px-4 rounded-lg flex-2">Photos </button>
                    <input type="text" onKeyPress={(e) => {
                                if (e.key === 'Enter') {
                                    search();
                                }
                            }} className="flex-6 border-none text-2xl text-gray-500 font-semibold flex-grow h-max border-gray-300 focus:outline-none" onChange={handleInputChange} placeholder="Search for free photos" />
                    <IoMdSearch onClick={search} className='cursor-pointer' style={{ width: "36px", height: "36px", color: "gray", marginRight: "8px" }} />
                </div>
                <div className="text-center flex flex-row justify-start items-center p-5 m-5" id='trending'>
                    <p className="text-[0.75rem] md:text-2xl text-gray-400 font-semibold" >Trending:  </p>
                    <ul className="flex justify-center mx-1 md:text-2xl">
                        <li className="mr-2"><a href="#" onClick={() => localStorage.setItem("query", "Nature")} className="text-gray hover:underline">Nature</a>,</li>
                        <li className="mr-2"><a href="#" onClick={() => localStorage.setItem("query", "City")} className="text-gray hover:underline">City</a>,</li>
                        <li className="mr-2"><a href="#" onClick={() => localStorage.setItem("query", "Technology")} className="text-gray hover:underline">Technology</a>,</li>
                        <li className="mr-2"><a href="#" onClick={() => localStorage.setItem("query", "Travel")} className="text-gray hover:underline">Travel</a>,</li>
                        <li><a href="#" onClick={() => localStorage.setItem("query", "Business")} className="text-gray hover:underline">Business</a></li>
                    </ul>
                </div>
                <div>
                    <h1>Showing Results for {query}</h1>
                    <ImageList query={query}/>
                </div>
            </div>
        </>
    )
}

export default SearchResults
import "../css/searchbar.css";
import { CiImageOn } from "react-icons/ci";

export default function SearchBar(){
    return(
        <div className="container p-auto m-auto flex flex-column justify-center items-center w-min">
            <div>

            </div>
            <div className="p-auto bg-white rounded-lg border-gray flex flex-row justify-center items-center w-min">
                <form>
                    <div className="search-div">
                        <button className="px-2 mx-2 my-2 py-2 flex flex-row items-center bg-gray-300 text-black rounded-lg text-2xl border-black dark:border-gray-600">
                            <CiImageOn className="mx-3"/>
                            Photos 
                            <svg class="w-2.5 h-2.5 ms-2.5 mx-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                            </svg>
                        </button>
                        <input className="text-2xl"  type="search" placeholder="Search for free photos"/>
                        
                        <svg class="mx-6 my-4 w-6 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>

                    </div>
                </form>
            </div>
            <div>

            </div>
        </div>
    );
}
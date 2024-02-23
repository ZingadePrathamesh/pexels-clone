import React from 'react'

const HeroHeaderContent = () => {
    return (
        <>
            <header className="text-white md:py-4 py-1">
                <div className="container mx-auto text-center md:w-[40vw]">
                    <h1 className="text-xl md:text-4xl font-bold">The best free stock photos, royalty free images & videos shared by creators.</h1>
                    <div className="mt-4 flex justify-center items-center">
                        <input type="text" className="p-2 w-64 border border-gray-300 rounded-l focus:outline-none" placeholder="Search for free photos" />
                        <button className="bg-blue-500 text-white p-2 rounded-r">Search</button>
                    </div>
                </div>
            </header>
            <div className="container mx-auto mt-8">
                <div className="text-center">
                    <p className="text-[0.75rem] md:text-2xl text-gray-800 font-semibold">Trending:</p>
                    <ul className="flex justify-center mt-2">
                        <li className="mr-2"><a href="#" className="text-white hover:underline">Nature</a>,</li>
                        <li className="mr-2"><a href="#" className="text-white hover:underline">City</a>,</li>
                        <li className="mr-2"><a href="#" className="text-white hover:underline">Technology</a>,</li>
                        <li className="mr-2"><a href="#" className="text-white hover:underline">Travel</a>,</li>
                        <li><a href="#" className="text-white hover:underline">Business</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HeroHeaderContent
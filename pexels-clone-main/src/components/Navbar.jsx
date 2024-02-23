import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/Pexels.svg"
import "../css/navbar.css"

function Navbar() {
    const [dropDown, setDropDown] = useState(false);

    const toggleDropdown = ()=> setDropDown(!dropDown);

  return (
    <nav className='navbar'>
        <ul>
            <div className='logo-div'>
                <img src={logo} alt='pexels logo' height={180} width={150}/>
                <h1 className='text-white text-4xl' >Pexels</h1>
            </div>
        </ul>
        <div className='right-nav'>
            <ul>
                <Link to="/"><li>...</li></Link>
                <Link to="/"><li>Upload</li></Link>
                <Link to="/"><li>License</li></Link>
                <Link to="/" onClick={toggleDropdown}><li>Explore</li></Link>
            </ul>
            <ul>
                <Link to='/'><li><button type="button" className="bg-white text-black px-6 py-4 rounded-lg items-center">Join</button></li></Link>
            </ul>
        </div>
        
    </nav>
  );
}

export default Navbar;

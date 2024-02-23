import pexels_logo from  "../images/pexels_logo.png";
import logo from "../images/Pexels.svg";
import "../css/navbar.css"

export default function Navbar(){
    return(
        <nav className="navbar flex justify-evenly">
            <ul>
                <li><a>
                    <div className="logo-div">
                        <img src={logo} alt="A logo of pexels" height={180} width={80}/>
                        <p className="text-[1.5rem]">Pexels</p>
                    </div>  
                </a></li>
            </ul>
            <ul className="">
                <li className="text-[1.5rem]"><a>Explore</a></li>
                <li className="text-[1.5rem]"><a>License</a></li>
                <li className="text-[1.5rem]"><a>Upload</a></li>
                <li className="text-[1.5rem]"><a>...</a></li>
                <li className="text-[1.5rem]"><a className="btn-light"><button>Join</button></a></li>
            </ul>
        </nav>
    );
}
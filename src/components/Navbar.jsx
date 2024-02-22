import pexels_logo from  "../images/pexels_logo.png";
import logo from "../images/Pexels.svg";
import "../css/navbar.css"

export default function Navbar(){
    return(
        <nav className="navbar">
            <ul>
                <li><a>
                    <div className="logo-div">
                        <img src={logo} alt="A logo of pexels" height={180} width={150}/>
                        <p>Pexels</p>
                    </div>  
                </a></li>
            </ul>
            <ul>
                <li><a>Explore</a></li>
                <li><a>License</a></li>
                <li><a>Upload</a></li>
                <li><a>...</a></li>
                <li><a className="btn-light"><button>Join</button></a></li>
            </ul>
        </nav>
    );
}
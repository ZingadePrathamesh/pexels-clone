import pexels_logo from "../images/pexels_logo.png";
import logo from "../images/Pexels.svg";
import "../css/navbar.css"
import { useState } from "react";

export default function Navbar() {

    const [toggle, settoggle] = useState(false);

    if (window.innerWidth < "720") {
        return (
            <nav className="navbar flex justify-evenly">
                <ul>
                    <li><a>
                        <div className="logo-div">
                            <img src={logo} alt="A logo of pexels" height={180} width={80} />
                            <p className="text-[1.5rem]">Pexels</p>
                        </div>
                    </a></li>
                </ul>
                {
                    toggle ? <>
                        <ul className="w-[100vw] h-[100vh] absolute top-0 bg-gray-900">
                            <div className="flex flex-col mt-[5rem]">
                                <li className="text-[1rem]"><a>Explore</a></li>
                                <li className="text-[1rem]"><a>License</a></li>
                                <li className="text-[1rem]"><a>Upload</a></li>
                                <li className="text-[1rem]"><a className="btn-light"><button>Join</button></a></li>
                            </div>
                        </ul>
                        <button className="absolute right-[2.9rem] top-[1.5rem]" onClick={() => { settoggle(!toggle) }}>
                            <span className="text-[3rem] text-white">X</span>
                        </button>

                    </> : <>
                        <button onClick={() => { settoggle(!toggle) }}>
                            <div className="text-2xl text-white flex flex-col leading-[10px] m-5">
                                <span className="">---</span>
                                <span className="">---</span>
                                <span className="">---</span>
                            </div>
                        </button>
                    </>
                }
            </nav>
        );
    }

    return (
        <nav className="navbar flex justify-evenly">
            <ul>
                <li><a>
                    <div className="logo-div">
                        <img src={logo} alt="A logo of pexels" height={180} width={80} />
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
import Navbar from "./Navbar";
import "../css/introduction.css";

export default function Introduction(){
    return(
        <div className="parent-intro bg-slate-600 w-auto ">
            <Navbar/>
            <div className="middle-intro bg-slate-400">
                MIDDLE
            </div>
            <div className="bottom-intro bg-slate-500">
                bottom
            </div>
            intro
        </div>
    );
}
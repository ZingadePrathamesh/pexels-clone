import Navbar from "./Navbar";
import "../css/introduction.css";
import SearchBar from "./SearchBar";

export default function Introduction(){
    return(
        <div className="parent-intro bg-slate-600 w-auto ">
            <Navbar/>
            <SearchBar/>
            <div className="bottom-intro bg-slate-500">
                bottom
            </div>
            intro
        </div>
    );
}
import Navbar from "./Navbar";
import "../css/introduction.css";
import HeroHeaderContent from "./HeroHeaderContent";
import ImageList from "./ImageList";
import { useState } from "react";

export default function Introduction(){
    const [fourBtnToggle, setfourBtnToggle] = useState("Home");
    
    function handleFourBtnToggle(values){
        console.log(values);
        setfourBtnToggle(values);
    }

    return(
        <div>
            <div className="parent-intro bg-slate-600 w-auto h-auto">
                <Navbar/>
                <div className="middle-intro ">
                    <HeroHeaderContent/>
                </div>
                <div className="flex flex-row items-center justify-end">
                    <h3 className="text-white text-2xl mx-3 my-6">
                        Photo by Daria Rohova
                    </h3>
                </div>
            </div>
            {/* For the buttons present between the image list and the search bar */}
            <div className="flex flex-row items-center justify-center my-8">
                <ul className="four-btn flex flex-row items-center justify-center">
                    <li><div onClick={()=> handleFourBtnToggle("Home")} className={fourBtnToggle==="Home"? ' four-btn-div active' :'four-btn-div'}>Home</div></li>
                    <li><div onClick={()=> handleFourBtnToggle("Videos")} className={fourBtnToggle==="Videos"? ' four-btn-div active' :'four-btn-div'}>Videos</div></li>
                    <li><div onClick={()=> handleFourBtnToggle("LeaderBoard")} className={fourBtnToggle==="LeaderBoard"? ' four-btn-div active' :'four-btn-div'}>Leaderboard</div></li>
                    <li><div onClick={()=> handleFourBtnToggle("Challenges")} className={fourBtnToggle==="Challenges"? ' four-btn-div active' :'four-btn-div'}>Challenges</div></li>
                </ul>
            </div>
            <div>
                <ImageList/>
            </div>
        </div>
    );
}
import "../css/hero.css";

import { useSelector } from "react-redux";
// import { changeDarkMode } from "../slices/darkmodeSlice";

interface State {
    darkmode: {
        isDarkmode: boolean
    }
}

function Hero() {
    const isDarkmode: boolean = useSelector((state: State) => state.darkmode.isDarkmode);
    return (
        <>
            <div className="hero-grid">
                <div className="hero-text box-1" style={{ gridArea: "box-1" }}></div>
                <div className="hero-text box-2" style={{ gridArea: "box-2" }}>
                    {/* <div className="hero-title">MOLLY's</div>
                    <div className="hero-desc">Our certified professionals provide a calm, caring, and clean experience, leaving your pet feeling happy and looking fabulous.</div> */}
                </div>
                <div className="hero-text box-3" style={{ gridArea: "box-3" }}>
                    <div>DAYCARE {isDarkmode ? "dark" : "light"} </div>
                </div>
                <div className="hero-text box-4" style={{ gridArea: "box-4" }}>
                    <div>GROOMING</div>
                </div>
            </div>
        </>
    )
}
export default Hero;
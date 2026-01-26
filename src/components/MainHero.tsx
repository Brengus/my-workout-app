import "../css/mainhero.css";
import { useSelector } from "react-redux";
function MainHero() {
    const isDarkmode: boolean = useSelector((state: any) => state.darkmode.isDarkmode)
    return (
        <>
            <div id="home" className={`main-hero ${isDarkmode ? "main-hero-dark" : "main-hero-light"}`}>
                <div className="main-hero-grid">
                    <div className={`main-hero-text ${isDarkmode ? "main-hero-text-dark" : ""}`}>GROOMING THAT MAKES YOUR DOG GO BLIAD</div>
                    <img src="../doggo.jpeg" alt="" className="hero-image" />


                </div>
            </div>
        </>
    )
}

export default MainHero;
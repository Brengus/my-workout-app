import "../css/hero.css";
function Hero() {
    return (
        <>
            <div className="hero-grid">
                <div className="hero-text box-1" style={{ gridArea: "box-1" }}></div>
                <div className="hero-text box-2" style={{ gridArea: "box-2" }}>
                    <div className="hero-title">GROOMO</div>
                    <div className="hero-desc">Our certified professionals provide a calm, caring, and clean experience, leaving your pet feeling happy and looking fabulous.</div>
                </div>
                <div className="hero-text box-3" style={{ gridArea: "box-3" }}></div>
                <div className="hero-text box-4" style={{ gridArea: "box-4" }}>
                    <div>Premium Experience</div>
                </div>
            </div>
        </>
    )
}
export default Hero;
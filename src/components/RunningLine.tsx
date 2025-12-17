import LogoSlide from "./LogoSlide";
import "../css/RunningLine.css"

export default function RunningLine() {
    return (
        <div id="our-partners" className="white-background">
            <div className="column">
                <div className="clients">
                    <div className="main-container">
                        <h3 className="running-line-title">Our Partners</h3>
                        <div className="logos">
                            <LogoSlide className="slide-animation" />
                            <LogoSlide className="slide-animation" />
                            <LogoSlide className="slide-animation" />
                            <LogoSlide className="slide-animation" />
                            <LogoSlide className="slide-animation" />
                            <LogoSlide className="slide-animation" />
                            <LogoSlide className="slide-animation" />
                            <LogoSlide className="slide-animation" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
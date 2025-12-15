import LogoSlide from "./LogoSlide";
import "../css/RunningLine.css"

export default function RunningLine() {
    return (
        <div className="white-background">
            <div className="column">
                <div className="clients">
                    <div className="main-container">
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
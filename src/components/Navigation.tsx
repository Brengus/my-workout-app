import "../css/navigation.css";
import React, { useEffect, useState, useRef } from "react";



function Navigation() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const ghostRef = useRef<HTMLDivElement>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleClick = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            console.warn(`Section with ID ${sectionId} not found.`);
        }
    }

    const handleScroll = () => {
        if (scrollRef.current && ghostRef.current) {
            const original = scrollRef.current.getBoundingClientRect();
            const ghost = ghostRef.current.getBoundingClientRect();

            const difference = Math.abs(original.top - ghost.top);

            setIsScrolled(difference > 5);

        }
        console.log("scrolled");
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <>
            <div className="ghost" ref={ghostRef}></div>
            <div className={`main ${isScrolled ? "active" : ""}`} ref={scrollRef}>
                <nav className="navigation-class">
                    <div className="item">
                        <img src="../logo.svg" alt="logo image" className="logo" onClick={() => handleClick("home")} />
                    </div>
                    <div className="nav-buttons item">
                        <button className={`item-buttons ${isScrolled ? "active" : ""}`} onClick={() => handleClick("home")}>HOME</button>
                        <button className={`item-buttons ${isScrolled ? "active" : ""}`} onClick={() => handleClick("aboutus")}>ABOUT US</button>
                        <button className={`item-buttons ${isScrolled ? "active" : ""}`} onClick={() => handleClick("testimonials")}>TESTIMONIALS</button>
                        <button className={`item-buttons ${isScrolled ? "active" : ""}`} onClick={() => handleClick("services")}>SERVICES</button>
                        <button className={`item-buttons ${isScrolled ? "active" : ""}`} onClick={() => handleClick("openinghours")}>OPENING HOURS</button>

                    </div>
                    <button className="item upgrade-button">Book a Visit</button>
                </nav>
            </div>
        </>


    )
}

export default Navigation;
import { set } from "date-fns";
import "../css/navigation.css";
import React, { useEffect, useState, useRef } from "react";



function Navigation() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const ghostRef = useRef<HTMLDivElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const handleClick = (sectionId: string) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
            console.warn(`Section with ID ${sectionId} not found.`);
        }
        if (menuOpen) {
            setMenuOpen(false);
        }
    }

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
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
                <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={() => handleMenuClick()}>
                    <div className="first-stick"></div>
                    <div className="second-stick"></div>
                    <div className="third-stick"></div>
                </div>
                <nav className="navigation-class">
                    <div className="item">
                        <img src="../servicesimg/dog.png" alt="logo image" className="logo" onClick={() => handleClick("home")} />
                    </div>
                    <div className={`nav-buttons item ${menuOpen ? "open" : ""}`}>
                        <button className={`item-buttons ${isScrolled ? "active" : ""}`} onClick={() => handleClick("home")}>HOME</button>
                        <button className={`item-buttons ${isScrolled ? "active" : ""}`} onClick={() => handleClick("aboutus")}>ABOUT US</button>
                        <button className={`item-buttons ${isScrolled ? "active" : ""}`} onClick={() => handleClick("our-partners")}>OUR PARTNERS</button>
                        <button className={`item-buttons ${isScrolled ? "active" : ""}`} onClick={() => handleClick("services")}>SERVICES</button>
                        <button className={`item-buttons ${isScrolled ? "active" : ""}`} onClick={() => handleClick("opening-hours")}>OPENING HOURS</button>

                    </div>
                    <button className="item upgrade-button">Book a Visit</button>
                </nav>
            </div>
        </>


    )
}

export default Navigation;
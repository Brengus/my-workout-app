import "../css/navigation.css";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { changeDarkMode } from "../slices/darkmodeSlice";

interface State {
    darkmode: {
        isDarkmode: boolean;
    }
}



function Navigation() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const ghostRef = useRef<HTMLDivElement>(null);
    const isDarkmode: boolean = useSelector((state: State) => state.darkmode.isDarkmode);
    const dispatch = useDispatch();
    const switchMode = useCallback(() => dispatch(changeDarkMode()), [dispatch]);
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

            <div className={`main ${isScrolled ? isDarkmode ? "active-dark" : "active" : ""}`} ref={scrollRef}>
                <div className={`menu-icon ${menuOpen ? "open" : ""}`} onClick={() => handleMenuClick()}>
                    <div className={`first-stick ${isDarkmode ? "stick-color-dark" : "stick-color-light"}`}></div>
                    <div className={`second-stick ${isDarkmode ? "stick-color-dark" : "stick-color-light"}`}></div>
                    <div className={`third-stick ${isDarkmode ? "stick-color-dark" : "stick-color-light"}`}></div>
                </div>
                <nav className="navigation-class">
                    <div className="item">
                        <img src="../logo.jpeg" alt="logo" className="logo" onClick={() => handleClick("home")} />
                    </div>
                    <div className={`nav-buttons item ${menuOpen ? "open" : ""} ${isDarkmode ? "open-dark" : ""}`}>
                        <button className={`item-buttons ${isDarkmode ? "button-dark" : "button-light"} ${isScrolled ? "active" : ""}`} onClick={() => handleClick("home")}>HOME</button>
                        <button className={`item-buttons ${isDarkmode ? "button-dark" : "button-light"} ${isScrolled ? "active" : ""}`} onClick={() => handleClick("aboutus")}>ABOUT US</button>
                        <button className={`item-buttons ${isDarkmode ? "button-dark" : "button-light"} ${isScrolled ? "active" : ""}`} onClick={() => handleClick("our-partners")}>OUR PARTNERS</button>
                        <button className={`item-buttons ${isDarkmode ? "button-dark" : "button-light"} ${isScrolled ? "active" : ""}`} onClick={() => handleClick("services")}>SERVICES</button>
                        <button className={`item-buttons ${isDarkmode ? "button-dark" : "button-light"} ${isScrolled ? "active" : ""}`} onClick={() => handleClick("opening-hours")}>OPENING HOURS</button>
                        
                    </div>
                    <img className="item upgrade-button" src={isDarkmode ? "../blackPoodle.png" : "../whitePoodle.png"} alt="darkmode whitemode" onClick={() => switchMode()} />
                </nav>
            </div>
        </>


    )
}

export default Navigation;
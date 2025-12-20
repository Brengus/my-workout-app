import "../css/popup.css";
// import "./Pizza"
import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { changeStatus } from '../slices/popupSlice';
import BusLayout from "./BusLayout";
import Picker from "./DatePicker"

interface State {
    popup: {
        isOpen: boolean
    }
}

function Popup() {

    const popupRef = useRef<HTMLDivElement>(null);
    const isOpen: boolean = useSelector((state: State) => state.popup.isOpen);
    const dispatch = useDispatch();
    const closePopUp = () => dispatch(changeStatus());

    const handleClickOutside = (event: MouseEvent) => {
        if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
            closePopUp();
        }
    }


    useEffect(() => {
        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    return (
        <>
            <div className={`booking-space ${isOpen ? 'active' : ''}`} ref={popupRef}>
                <div className="space-top">
                    <div className="popup-details">Select Details</div>
                    <div onClick={closePopUp} className="popup-x">
                        <div className="left-stick"></div>
                        <div className="right-stick"></div>
                    </div>
                </div>
                {/* <Picker /> */}
                <BusLayout />
            </div>
            <button
                className={`book-icon ${isOpen ? 'hidden' : ''}`}
                onClick={() => dispatch(changeStatus())}
            >
                Book Now
            </button>
        </>
    )
}

export default Popup
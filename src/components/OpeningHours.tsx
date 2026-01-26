import "../css/openinghours.css";
import { useSelector } from "react-redux";
function OpeningHours() {
    const isDarkmode: boolean = useSelector((state: any) => state.darkmode.isDarkmode);
    const objArr = [
        { day: 'Monday', hours: '9:00 - 17:00' },
        { day: 'Tuesday', hours: '9:00 - 17:00' },
        { day: 'Wednesday', hours: '9:00 - 17:00' },
        { day: 'Thursday', hours: '9:00 - 17:00' },
        { day: 'Friday', hours: '9:00 - 17:00' },
        { day: 'Saturday', hours: '10:00 - 16:00' },
        { day: 'Sunday', hours: 'Closed' },
    ]

    return (
        <>
            <div id="opening-hours" className="opening-main">
                <h3 className={`opening-title ${isDarkmode ? "opening-title-dark" : ""}`}>Opening Hours</h3>
                <div className={`opening-subtitle ${isDarkmode ? "opening-subtitle-dark" : ""}`}>Grooming sessions are strictly by appointment only. All pre-booked appointments must follow the Salon Policy guidelines.</div>
                <div className="opening-card-parent">
                    {objArr.map((item, index) => {
                        return (
                            <div className={`opening-child ${isDarkmode ? "opening-child-dark" : ""}`} key={index} >
                                <h3>{item.day}</h3>
                                <p>{item.hours}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default OpeningHours
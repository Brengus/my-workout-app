// import React, { useEffect, useState } from "react";
// import { Ticket, getTickets, bookSeat } from "../services/api";
// import BookingInput from "./BookingInput";
// import "../css/bus.css";


// const startBooking = (raceId: string, date: string, schedule: string) => {

// }


// const DateItem = ({ date, all }: { date: string, all: any[] }) => {
//     // Now it's safe to use useState here because this component runs once per item
//     const [isOpen, setIsOpen] = useState(false);
//     const [popUp, setPopUp] = useState(false);

//     const scheduleForDate = all.filter(item => item.date === date);

//     return (
//         <div className={`seat`}>
//             {/* Click to Toggle */}
//             <div
//                 onClick={() => setIsOpen(!isOpen)}
//                 style={{ cursor: "pointer", fontWeight: "bold" }}
//             >
//                 {date} {isOpen ? "▲" : "▼"}
//             </div>

//             {/* Show Schedule if Open */}
//             <div className={`schedule-list ${isOpen ? "open" : ""}`} style={{ display: isOpen ? 'block' : 'none', cursor: "pointer" }}>
//                 {scheduleForDate.length > 0 ? (
//                     scheduleForDate.map((item) => (
//                         <div
//                             key={item.raceId}
//                             className={`${item.availability > 0 ? "green" : "red"} sched-hour`}
//                             onClick={() => startBooking(item.raceId, item.date, item.schedule)}
//                         >
//                             {item.schedule}
//                         </div>

//                     ))
//                 ) : (
//                     <div style={{ fontSize: "0.8rem", color: "gray" }}>No schedules</div>
//                 )}
//             </div>
//         </div>
//     );
// };

// const BusLayout = () => {
//     const [tickets, setTickets] = useState<Ticket[]>([]);
//     const [selectedSeat, setSelectedSeat] = useState<Ticket | null>(null);
//     const [formData, setFormData] = useState({ name: "", email: "", id: "" });
//     const [schedule, setSchedule] = useState([]);
//     const [all, setAll] = useState<Array<{ raceId: string; date: string; schedule: string }>>([]);
//     const [dates, setDates] = useState([])
//     const [loading, setLoading] = useState(false);

//     // Load tickets on mount
//     useEffect(() => {
//         loadData();
//     }, []);

//     const loadData = async () => {
//         const data = await getTickets();

//         // setSchedule(data.schedule);
//         setDates(data.dates);
//         setAll(data.all);
//         console.log(all);
//     };

//     const handleSeatClick = (ticket: Ticket) => {
//         if (!ticket.isOpen) return; // Can't click booked seats
//         setSelectedSeat(ticket);
//     };

//     const handleBooking = async (e: React.FormEvent) => {
//         e.preventDefault();
//         if (!selectedSeat) return;

//         setLoading(true);
//         try {
//             setFormData({ ...formData, id: selectedSeat._id })
//             await bookSeat(formData);
//             alert(`Seat ${selectedSeat.seatNumber} booked successfully!`);
//             setSelectedSeat(null);
//             setFormData({ name: "", email: "", id: "" });
//             loadData(); // Refresh grid to show red seat
//         } catch (error) {
//             alert("Booking failed. Please try again.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     const displaySchedule = (date: string) => {
//         const filteredSchedule = all.filter(items => items.date === date);

//         return filteredSchedule.map(item => {
//             return (
//                 <div key={item.raceId}>{item.schedule}</div>
//             )
//         })
//     }

//     return (
//         <div className="bus-container">
//             {/* LEFT SIDE: THE BUS */}
//             <div className="bus-grid">
//                 <div className="driver-seat">Driver</div>
//                 {dates?.map((date) =>
//                     <DateItem key={date} date={date} all={all} />
//                 )}
//             </div>

//             {/* RIGHT SIDE: BOOKING FORM */}
//             <div className="booking-form-area">
//                 <h3>{selectedSeat ? `Booking Seat #${selectedSeat.seatNumber}` : "Select a Seat"}</h3>

//                 {selectedSeat && (
//                     <form onSubmit={handleBooking} className="seat-form">
//                         <input
//                             type="text"
//                             placeholder="Your Name"
//                             value={formData.name}
//                             onChange={e => setFormData({ ...formData, name: e.target.value })}
//                             required
//                         />
//                         <input
//                             type="email"
//                             placeholder="Email"
//                             value={formData.email}
//                             onChange={e => setFormData({ ...formData, email: e.target.value })}
//                             required
//                         />
//                         <button type="submit" disabled={loading} className="confirm-btn">
//                             {loading ? "Processing..." : "Confirm Booking"}
//                         </button>
//                     </form>
//                 )}

//                 {/* Legend */}
//                 <div className="legend">
//                     <div><span className="dot open"></span> Available</div>
//                     <div><span className="dot booked"></span> Booked</div>
//                     <div><span className="dot selected"></span> Selected</div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BusLayout;

import React, { useEffect, useState } from "react";
import { Ticket, getTickets, bookSeat } from "../services/api";
import "../css/bus.css";

// Interface for the slot selected by the user
interface BookingSelection {
    raceId: string;
    date: string;
    schedule: string;
}

// --- MODAL COMPONENT ---
const BookingModal = ({
    selection,
    onClose,
    onSubmit
}: {
    selection: BookingSelection,
    onClose: () => void,
    onSubmit: (formData: any) => void
}) => {
    const [formData, setFormData] = useState({ name: "", email: "", id: selection.raceId });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Pass data back to parent or call API directly here
        await onSubmit(formData);
        bookSeat(formData);
        setLoading(false);
    };

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-modal" onClick={onClose}>&times;</button>

                <div className="modal-details">
                    <h3>Confirm Booking</h3>
                    <p><strong>Date:</strong> {selection.date}</p>
                    <p><strong>Time:</strong> {selection.schedule}</p>
                </div>

                <form onSubmit={handleSubmit} className="seat-form">
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        required
                    />
                    {/* <input
                        type="text"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                        required
                    /> */}
                    <button type="submit" disabled={loading} className="confirm-btn">
                        {loading ? "Processing..." : "Confirm Booking"}
                    </button>
                </form>
            </div>
        </div>
    );
};

// --- DATE ITEM COMPONENT ---
const DateItem = ({
    date,
    all,
    onBook
}: {
    date: string,
    all: any[],
    onBook: (raceId: string, date: string, schedule: string) => void
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const scheduleForDate = all.filter(item => item.date === date);

    return (
        <div className={`seat`}>
            {/* Click to Toggle Dropdown */}
            <div
                onClick={() => setIsOpen(!isOpen)}
                style={{ cursor: "pointer", fontWeight: "bold" }}
            >
                {date} {isOpen ? "▲" : "▼"}
            </div>

            {/* Show Schedule if Open */}
            <div className={`schedule-list ${isOpen ? "open" : ""}`} style={{ display: isOpen ? 'block' : 'none' }}>
                {scheduleForDate.length > 0 ? (
                    scheduleForDate.map((item) => (
                        <div
                            key={item.raceId}
                            className={`${item.availability > 0 ? "green" : "red"} sched-hour`}
                            style={{ cursor: item.availability > 0 ? "pointer" : "not-allowed", opacity: item.availability > 0 ? 1 : 0.5 }}
                            onClick={() => {
                                if (item.availability > 0) {
                                    onBook(item.raceId, item.date, item.schedule);
                                }
                            }}
                        >
                            {item.schedule}
                        </div>
                    ))
                ) : (
                    <div style={{ fontSize: "0.8rem", color: "gray" }}>No schedules</div>
                )}
            </div>
        </div>
    );
};

// --- MAIN LAYOUT COMPONENT ---
const BusLayout = () => {
    const [all, setAll] = useState<Array<{ raceId: string; date: string; schedule: string; availability: number }>>([]);
    const [dates, setDates] = useState([]);

    // State to handle the Popup
    const [activeBooking, setActiveBooking] = useState<BookingSelection | null>(null);

    // Load tickets on mount
    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        try {
            const data = await getTickets();
            setDates(data.dates);
            setAll(data.all);
        } catch (error) {
            console.error("Failed to load data", error);
        }
    };

    // Triggered when a user clicks a time slot in DateItem
    const handleOpenBooking = (raceId: string, date: string, schedule: string) => {
        setActiveBooking({ raceId, date, schedule });
    };

    // Triggered when the form inside the modal is submitted
    const handleConfirmBooking = async (formData: any) => {
        try {
            // Call your API service
            await bookSeat(formData);
            alert(`Booking confirmed for ${activeBooking?.date} at ${activeBooking?.schedule}!`);

            // Close modal and refresh data
            setActiveBooking(null);
            loadData();
        } catch (error) {
            alert("Booking failed. Please try again.");
        }
    };

    return (
        <div className="bus-container">
            {/* LEFT SIDE: THE SCHEDULE LIST */}
            <div className="bus-grid">
                <div className="driver-seat">Select a Date & Time</div>
                {dates?.map((date) =>
                    <DateItem
                        key={date}
                        date={date}
                        all={all}
                        onBook={handleOpenBooking}
                    />
                )}
            </div>

            {/* POPUP MODAL */}
            {activeBooking && (
                <BookingModal
                    selection={activeBooking}
                    onClose={() => setActiveBooking(null)}
                    onSubmit={handleConfirmBooking}
                />
            )}

            {/* Optional: Keep the Right Side Legend/Details if needed, 
                but the form is now in the popup */}
            <div className="booking-form-area">
                <div className="legend">
                    <div><span className="dot open" style={{ background: 'green' }}></span> Available</div>
                    <div><span className="dot booked" style={{ background: 'red' }}></span> Full</div>
                </div>
            </div>
        </div>
    );
};

export default BusLayout;
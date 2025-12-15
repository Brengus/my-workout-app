import { useState, useMemo, useEffect } from "react"
import DatePicker from "react-datepicker";
import { setHours, setMinutes, subDays, getTime, format, setSeconds, setMilliseconds, addDays } from 'date-fns';
import "../css/popup.css"
import "react-datepicker/dist/react-datepicker.css";

type Booking = {
    id: Number
    date: string
    time: string
}


const mockBookings: Booking[] = [
    { id: 101, date: "2025-12-05", time: "10:00:00" },
    { id: 102, date: "2025-12-05", time: "13:00:00" },
    { id: 106, date: "2025-12-05", time: "23:00:00" },
    { id: 103, date: "2025-12-06", time: "11:00:00" },
    { id: 104, date: "2025-12-06", time: "15:00:00" },
    { id: 103, date: "2025-12-07", time: "11:00:00" },
    { id: 104, date: "2025-12-07", time: "15:00:00" }
];


const excludeDates: Date[] = [
    subDays(new Date(), 2),
    subDays(new Date(), 3),
    subDays(new Date(), -5),
]

const TIME_FORMAT = 'yyyy-MM-dd';

function Picker() {
    const [selectedDate, setSelectedDate] = useState(new Date());

    function handleChange(date: Date | null) {
        if (date) {
            setSelectedDate(date)
        }
    }

    const bookedTimeSlots = useMemo(() => {
        const dateString = format(selectedDate, TIME_FORMAT);
        const bookingsForDate = mockBookings.filter(booking => booking.date === dateString);

        return bookingsForDate.map(booking => {
            const [hour, minute] = booking.time.split(':').map(Number);
            let excludedTimeDate: Date;
            excludedTimeDate = setHours(setMinutes(selectedDate, minute), hour);
            excludedTimeDate = setSeconds(excludedTimeDate, 0);
            excludedTimeDate = setMilliseconds(excludedTimeDate, 0);

            return excludedTimeDate;
        });

    }, [selectedDate]);

    const filterPassedTime = (time: Date) => {
        const currentDate = new Date();
        const selectedDate = new Date(time);
        const startDate = setHours(setMinutes(new Date(time), 0), 10);
        const endDate = setHours(setMinutes(new Date(time), 0), 22);

        return (currentDate.getTime() < selectedDate.getTime()) && (selectedDate > startDate) && (selectedDate < endDate);
    }

    return <DatePicker
        calendarClassName="red-border"
        selected={selectedDate}
        onChange={handleChange}
        showTimeSelect
        excludeDates={excludeDates}
        excludeTimes={bookedTimeSlots}
        filterTime={filterPassedTime}
        timeFormat="HH:mm"
        timeIntervals={60}
        dateFormat="yyyy-MM-dd HH:mm"
        maxDate={addDays(new Date, 30)}
        inline
    />
}

export default Picker;


function BookingInput({ bool, raceId, date, schedule }: { bool: Boolean, raceId: string, date: string, schedule: string }){
    return (
        <div className={`${bool?"display":"noDisplay"}`}>
            <div>{date}</div>
            <div>{schedule}</div>
            <input type="text" />
            <input type="number" />

            <button>book</button>
        </div>
    )
}

export default BookingInput

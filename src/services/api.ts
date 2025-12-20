// Adjust this URL to wherever your backend is running (e.g., http://localhost:8080)
const API_URL = "http://localhost:5000";

export interface Ticket {
    _id: string;
    seatNumber: number;
    isOpen: boolean;
    userDetails?: {
        name: string;
        email: string;
    };
}

export const getTickets = async () => {
    try {
        // Assuming your backend has an endpoint like /tickets that returns all seats
        // If not, you might need to fetch /tickets/open and /tickets/closed and merge them
        const response = await fetch(`${API_URL}/ticket/api/schedule`);
        if (!response.ok) throw new Error("Failed to fetch tickets");
        return await response.json();
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const bookSeat = async (userDetails: { name: string, email: string, id: string }) => {
    // We need to transform the data to match what the backend expects
    const payload = {
        name: userDetails.name,
        email: userDetails.email,
        raceId: userDetails.id, // Backend expects 'raceId'
        start: "Rustaveli",     // Hardcoded based on your app context, or pass it dynamically
        amount: 1,              // Default to 1 seat
        Passengers: 1,           // Required by backend validation
        phone: 555555555
    };

    const response = await fetch(`${API_URL}/ticket/create`, { // Ensure path is correct (/ticket/create vs /create)
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
    });
    console.log(response)

    if (!response.ok) throw new Error("Booking failed");
    return await response.json();
};

export const resetBus = async () => {
    await fetch(`${API_URL}/admin/reset`, { method: "POST" });
};
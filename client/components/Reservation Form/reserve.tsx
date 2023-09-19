import { useState } from "react"
import axios from "axios"

//interface for reservation
interface Reservation {
    name: string
    email: string
    phone: string
    date: string
    time: string
    guests: string
    message: string
}

export default function ReservationForm() {
    // State
    const [reservation, setReservation] = useState<Reservation>({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '',
        message: ''
    })

    const [error, setError] = useState<string>('');

    //
    const handleSubmit = async (e: any) => {
        e.preventDefault()

        // Convert time to HH:mm:ss format
        const timeParts = reservation.time.split(':');
        const formattedTime = `${timeParts[0]}:${timeParts[1]}:00`;

        const updatedReservation = {
            ...reservation,
            time: formattedTime,
        };


        console.log(reservation)
        try {
            await axios.post('http://localhost:3001/', updatedReservation)
        } catch (e) {
            console.log(e)
            const error = (e as any).response.data.error
            setError(error)
        }


    }

    return (
        <>
            <form className="grid grid-cols-2 gap-4 w-3/4 mx-auto text-black" onSubmit={handleSubmit}>
                <label htmlFor="name" className="font-serif text-lg col-start-1">Name</label>
                <input className="border border-blue-300 rounded-lg p-2 col-start-2" type="text" name="name" id="name" onChange={(e) => setReservation({ ...reservation, name: e.target.value })} required />
                <label htmlFor="email" className="font-serif text-lg col-start-1">Email</label>
                <input className="border border-blue-300 rounded-lg p-2 col-start-2" type="email" name="email" id="email" onChange={(e) => setReservation({ ...reservation, email: e.target.value })} required />
                <label htmlFor="phone" className="font-serif text-lg col-start-1">Phone</label>
                <input className="border border-blue-300 rounded-lg p-2 col-start-2" type="tel" name="phone" id="phone" onChange={(e) => setReservation({ ...reservation, phone: e.target.value })} required />
                <label htmlFor="date" className="font-serif text-lg col-start-1">Date</label>
                <input className="border border-blue-300 rounded-lg p-2 col-start-2" type="date" name="date" id="date" onChange={(e) => setReservation({ ...reservation, date: e.target.value })} required />
                <label htmlFor="time" className="font-serif text-lg col-start-1">Time</label>
                <input className="border border-blue-300 rounded-lg p-2 col-start-2" type="time" name="time" id="time" onChange={(e) => setReservation({ ...reservation, time: e.target.value })} required />
                <label htmlFor="guests" className="font-serif text-lg col-start-1">Guests</label>
                <input className="border border-blue-300 rounded-lg p-2 col-start-2" type="number" name="guests" id="guests" onChange={(e) => setReservation({ ...reservation, guests: e.target.value })} required />
                <label htmlFor="message" className="font-serif text-lg col-start-1">Message</label>
                <textarea className="border border-blue-300 rounded-lg p-2 col-start-2" name="message" id="message" onChange={(e) => setReservation({ ...reservation, message: e.target.value })} required />
                <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded col-span-2">
                    Submit
                </button>
            </form>

            {error && <p>{error}</p>}
        </>
    );
}
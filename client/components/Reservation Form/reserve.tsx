import { useState } from "react"

export default function ReservationForm() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [guests, setGuests] = useState('')
    const [message, setMessage] = useState('')

    return(
        <form className="grid grid-cols-2 gap-4 w-3/4 mx-auto text-white">
            <label htmlFor="name" className="font-serif text-lg col-start-1">Name</label>
            <input className="border border-blue-300 rounded-lg p-2 col-start-2" type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            <label htmlFor="email" className="font-serif text-lg col-start-1">Email</label>
            <input className="border border-blue-300 rounded-lg p-2 col-start-2" type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="phone" className="font-serif text-lg col-start-1">Phone</label>
            <input className="border border-blue-300 rounded-lg p-2 col-start-2" type="tel" name="phone" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
            <label htmlFor="date" className="font-serif text-lg col-start-1">Date</label>
            <input className="border border-blue-300 rounded-lg p-2 col-start-2" type="date" name="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
            <label htmlFor="time" className="font-serif text-lg col-start-1">Time</label>
            <input className="border border-blue-300 rounded-lg p-2 col-start-2" type="time" name="time" id="time" value={time} onChange={(e) => setTime(e.target.value)} />
            <label htmlFor="guests" className="font-serif text-lg col-start-1">Guests</label>
            <input className="border border-blue-300 rounded-lg p-2 col-start-2" type="number" name="guests" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />
            <label htmlFor="message" className="font-serif text-lg col-start-1">Message</label>
            <textarea className="border border-blue-300 rounded-lg p-2 col-start-2" name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} />
            <button type="submit" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded col-span-2">
                Submit
            </button>
        </form>
    );
}
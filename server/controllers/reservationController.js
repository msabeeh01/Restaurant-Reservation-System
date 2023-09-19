import { supabase } from '../supabaseClient.js'

//create controller that receives information
//from the client and sends it to the database
const reserve = async (req, res) => {
    const { name, email, phone, date, time, guests, message } = req.body

    //check if all fields are filled
    if (!name || !email || !phone || !date || !time || !guests) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    try {
        //check if reservation exists at that time and date
        const { data, error } = await supabase
            .from('reservations')
            .select('*')
        //if data exists
        if (data.length > 0) {
            
            const reservation = data.filter(reservation => reservation.date === date && reservation.time === time);
            const names = data.filter(reservation => reservation.name === name);

            //if there are two reservations at that time, return error
            if (reservation.length >= 2) {
                return res.status(400).json({ message: 'Reservation already exists at that time' })
            }

            //if there is a reservation under the req name, return error
            if (names.length >= 1) {
                return res.status(400).json({ message: 'Reservation already exists under that name' })
            }
            else {
                //create a new reservation
                const { data, error } = await supabase
                    .from('reservations')
                    .insert([
                        { name, email, phone, date, time, guests, message }
                    ])
                return res.status(200).json({ message: 'Reservation created' })
            }
        } else {
            //create a new reservation if there are no reservations
            const { data, error } = await supabase
                .from('reservations')
                .insert([
                    { name, email, phone, date, time, guests, message }
                ])
            return res.status(200).json({ message: 'Reservation created' })
        }
    } catch (e) {
        console.log(e)
    }
}

export {
    reserve
}
import { supabase } from '../supabaseClient.js'
import { redisClient } from '../redis.js'

//connect to redis
redisClient.on('connect', () => {
    console.log('Redis Client Connected')
})

redisClient.on('error', (err) => {
    console.log('Redis Client Error', err)
})




//create controller that receives information
//from the client and sends it to the database
const reserve = async (req, res) => {
    const { name, email, phone, date, time, guests, message } = req.body

    //check if all fields are filled
    if (!name || !email || !phone || !date || !time || !guests) {
        return res.status(400).json({ message: 'All fields are required' })
    }

    try {
        //check if reservation exists under provided email
        const emailExists = await redisClient.get(email);
        if (emailExists) {
            return res.status(500).json({ error: 'Reservation already exists under that email "REDIS"', reservation: JSON.parse(emailExists) })
        }

        //check if reservation exists at that time and date
        const { data, error } = await supabase
            .from('reservations')
            .select('*')
        //if data exists
        if (data.length > 0) {
            console.log('MY DATE AND TIME', date, time)
            console.log('MY DATA TIME AND DATE', data[0].time, data[0].date)
            //filter data by date and time
            const reservation = data.filter(reservation => reservation.date === date && reservation.time === time);

            //if there are two reservations at that time, return error
            if (reservation.length >= 2) {
                return res.status(500).json({ error: 'Reservation already exists at that time' })
            }

            else {
                //create a new reservation
                const { data, error } = await supabase
                    .from('reservations')
                    .insert([
                        { name, email, phone, date, time, guests, message }
                    ])
                    .select()
                //insert into redis cache under email
                redisClient.set(email, JSON.stringify(data))
                    .then(() => {
                        return res.status(200).json({ message: 'Reservation created', reservation: data })
                    })


            }
        } else {
            //create a new reservation if there are no reservations
            const { data, error } = await supabase
                .from('reservations')
                .insert([
                    { name, email, phone, date, time, guests, message }
                ])
                .select()
            //insert into redis cache under email
            redisClient.set(email, JSON.stringify(data))
                .then(() => {
                    return res.status(200).json({ message: 'Reservation created', reservation: data })
                })
        }
    } catch (e) {
        console.log(e)
    }
}



export {
    reserve
}
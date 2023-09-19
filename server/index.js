//create and run express app
import express from 'express'
const app = express();

app.use(express.json());

//import routes
import {reservationRouter} from './routers/reservationRoutes.js'

app.use('/', reservationRouter)

//create and run server
const port = 3001;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});





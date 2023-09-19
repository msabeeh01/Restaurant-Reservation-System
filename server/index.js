//create and run express app
import express from 'express'
const app = express();

//cors
import cors from 'cors'

app.use(express.json());
app.use(cors());

//import routes
import {reservationRouter} from './routers/reservationRoutes.js'

app.use('/', reservationRouter)

//create and run server
const port = 3001;
app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});





//import controller
import {reserve} from '../controllers/reservationController.js'

//create router
import express from 'express'
const reservationRouter = express.Router()

//create route for reservation
reservationRouter.post('/', reserve)

//export router
export {
    reservationRouter
}


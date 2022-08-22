import { Router } from 'express'
import { makeCreateAppointmentController } from '@main/factories'

const routes = Router()

routes.post('/appointment', makeCreateAppointmentController().call)

export { routes }

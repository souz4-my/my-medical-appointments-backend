import { CreateAppointmentController } from '@controllers/appointment'
import { AppointmentRepositoryMongo } from '@infra/repositories/appointment'
import { CreateAppointment } from 'app/services/appointment'

export const makeCreateAppointmentController = () => {
	const repository = new AppointmentRepositoryMongo()
	const useCase = new CreateAppointment(repository)

	return new CreateAppointmentController(useCase)
}

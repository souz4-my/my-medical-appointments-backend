import { FindAppointmentController } from '@controllers/appointment'
import { AppointmentRepositoryMongo } from '@infra/repositories/appointment'
import { EmailRepositoryNodemailer } from '@infra/repositories/email'
import { FindAppointment } from 'app/services/appointment'
import { SendEmail } from 'app/services/email/send'

export const makeFindAppointmentController = () => {
	const appointmentRepositoryMongo = new AppointmentRepositoryMongo()
	const emailRepositoryNodemailer = new EmailRepositoryNodemailer()
	const findAppointment = new FindAppointment(appointmentRepositoryMongo)
	const sendEmail = new SendEmail(emailRepositoryNodemailer)

	return new FindAppointmentController(findAppointment, sendEmail)
}

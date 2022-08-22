import { FindAppointment } from 'app/services/appointment'
import { SendEmail } from 'app/services/email/send'

export class FindAppointmentController {
	constructor(private readonly findAppointments: FindAppointment, private readonly sendEmail: SendEmail) {}

	call = async () => {
		const result = await this.findAppointments.call()

		if (Array.isArray(result)) {
			result.forEach(async (element) => {
				await this.sendEmail.call(element)
			})
		}
	}
}

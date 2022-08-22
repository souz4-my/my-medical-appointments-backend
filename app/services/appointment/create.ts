import { AppointmentRepositoryMongo } from '@infra/repositories/appointment'
import { AppointmentModel } from '@models/index'
import { addHours } from 'date-fns'

export class CreateAppointment {
	constructor(private readonly repository: AppointmentRepositoryMongo) {}

	async call(params: AppointmentModel) {
		try {
			params.date = new Date(params.date)
			await this.repository.create({
				...params,
				rememberIn: addHours(params.date, -2)
			})
			return {
				message: 'Agendamento criado com sucesso. Você receberá um e-mail lembrando dessa consulta 2 horas antes.',
				hasError: false
			}
		} catch (err) {
			return {
				message: 'Não foi possível criar seu lembrete. Por favor tente mais tarde.',
				err: err.message,
				hasError: true,
				status: 500
			}
		}
	}
}

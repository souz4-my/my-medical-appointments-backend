import { AppointmentRepositoryMongo } from '@infra/repositories/appointment'

export class FindAppointment {
	constructor(private readonly repository: AppointmentRepositoryMongo) {}

	async call() {
		try {
			return await this.repository.find()
		} catch (err) {
			return {
				message: 'Não foi possível buscar os lembretes.',
				err: err.message,
				hasError: true,
				status: 500
			}
		}
	}
}

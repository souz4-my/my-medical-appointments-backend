import { EmailRepositoryNodemailer } from '@infra/repositories/email'
import { AppointmentModel } from '@models/index'

export class SendEmail {
	constructor(private readonly repository: EmailRepositoryNodemailer) {}

	async call(params: AppointmentModel) {
		try {
			await this.repository.send({
				from: process.env.EMAIL_FROM,
				subject: 'Lembrete de consulta',
				to: params.email,
				text: `
					Você tem uma nova consulta daqui 2 horas, com paciente: ${params.name}.
					A consulta está agendada para às: ${params.date.toLocaleString()}
					\n
					Aqui estão as informações detalhadas sobre a consulta: ${params.description}.
				`
			})
		} catch (err) {
			console.log({
				message: 'Erro ao enviar o email',
				err: err.message
			})
		}
	}
}

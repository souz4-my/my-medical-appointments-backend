import { CreateAppointment } from 'app/services/appointment'
import { validateRequiredField } from 'app/services/generic/validateRequiredField'
import { Request, Response } from 'express'

export class CreateAppointmentController {
	constructor(private readonly useCase: CreateAppointment) {}

	call = async (req: Request, res: Response) => {
		if (!validateRequiredField(req.body, ['name', 'email', 'date', 'description'])) {
			const result = await this.useCase.call(req.body)

			if (result.hasError) {
				return res.status(result.status || 500).json(result)
			}

			return res.status(201).json(result)
		} else {
			return res.status(422).json({
				message: 'Necessário enviar todos os dados.'
			})
		}
	}
}

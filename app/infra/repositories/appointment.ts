import { AppointmentModel } from '@models/appointment'
import { PrismaClient } from '@prisma/client'
import { setMilliseconds, setSeconds } from 'date-fns'

export class AppointmentRepositoryMongo {
	#client: PrismaClient

	constructor() {
		this.#client = new PrismaClient()
	}

	create = async (params: AppointmentModel) => {
		await this.#client.appointment.create({
			data: {
				date: params.date.toISOString(),
				email: params.email,
				name: params.name,
				description: params.description,
				rememberIn: params.rememberIn
			}
		})

		return true
	}

	find = async () => {
		return await this.#client.appointment.findMany({
			where: {
				rememberIn: setSeconds(setMilliseconds(new Date(), 0), 0)
			}
		})
	}
}

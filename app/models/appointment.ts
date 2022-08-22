export type AppointmentModel = {
	id?: string
	name?: string
	email?: string
	date?: Date
	description?: string
	rememberIn?: Date
}

export type AppointmentsModel = AppointmentModel[]

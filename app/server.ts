import cron from 'node-cron'
import { makeFindAppointmentController } from '@main/factories/appointments/find'
import { config } from 'dotenv'
import { app } from '@infra/http/app'

config()

cron.schedule('* * * * *', async () => {
	console.log('Searching')

	await makeFindAppointmentController().call()
})

app.listen(Number(process.env.PORT), () => {
	console.log(`Server running on ${process.env.APP_URL}`)
})

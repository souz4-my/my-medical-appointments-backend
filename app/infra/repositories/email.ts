import { EmailModel } from '@models/email'
import nodemailer from 'nodemailer'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

export class EmailRepositoryNodemailer {
	#client: nodemailer.Transporter<SMTPTransport.SentMessageInfo>

	constructor() {
		this.#client = nodemailer.createTransport({
			auth: {
				user: process.env.EMAIL_USER, // generated ethereal user
				pass: process.env.EMAIL_PASS // generated ethereal password
			},
			host: process.env.EMAIL_HOST,
			port: Number(process.env.EMAIL_PORT),
			secure: !!process.env.EMAIL_SECURE
		} as SMTPTransport.Options)
	}

	send = async (params: EmailModel) => {
		await this.#client.sendMail(params)

		return true
	}
}

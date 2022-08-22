export type EmailModel = {
	from: string
	to: string
	subject: string
	text: string
	html?: string
}

export type EmailsModel = EmailModel[]

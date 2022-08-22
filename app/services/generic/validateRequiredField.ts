export const validateRequiredField = (
	data: {
		[key: string]: unknown
	},
	fields: string[]
) => {
	let hasError = false

	fields.forEach((element) => {
		if (data[element] === undefined) hasError = true
	})

	return hasError
}

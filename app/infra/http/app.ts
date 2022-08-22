import express from 'express'
import cors from 'cors'

import { routes } from '@main/routes'

const app = express()

app.use(
	express.json({
		type: ['application/json', 'text/plain']
	})
)
app.use(cors({ origin: '*' }))

app.use(routes)

export { app }

import express from 'express'
import Router from '../routes/routes.js'
import dotenv from 'dotenv'
import cors from 'cors'
import { logger } from 'logger-express'

dotenv.config()
const PORT = process.env.PORT ?? 3000

const app = express()
app.use(cors())
app.use(express.json())
app.use(logger())

app.use('/', Router)

app.listen(PORT, () => {
  console.log(`Server corriendo en el port ${PORT}`)
})

export default app

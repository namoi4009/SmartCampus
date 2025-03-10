import express from 'express'
import cors from 'cors'

const app = express()
const port = 3001

app.use(cors())

app.get('/', (req, res) => {
    res.json({title: 'Welcome to BK Smart Campus!'})
})

app.listen(port, () => {
    console.log(`Smart Campus is running at http://localhost:${port}/`)
})
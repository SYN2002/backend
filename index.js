const express = require('express')
require('dotenv').config()

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/login', (req, res) => {
    res.send('Login Page')
})

app.get('/register', (req, res) => {
    res.send('Register Page')
})

app.get('/jokes',(req, res) => {
    const jokes=[{id:1, jokeq:"Why did the scarecrow win the Nobel prize?",jokea:"Because he was out-standing in his field"},{id:2, jokeq:"Why did the chicken cross the road?",jokea:"To get to the other side"}]
    res.json(jokes)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})
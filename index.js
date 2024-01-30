require('dotenv').config()
const express = require('express')

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/ml',(req,res) => {
    res.send('ml model running ')
})
app.get('/api',(req,res) =>{
    res.send('<h1>api called</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req,res) =>{
    res.send('mEOW.COM')
})

app.get('/login',(rew,res) =>{
res.send("<h1> please login at Monsternrg ltd")

})

app.get('/youtube',(req,res) =>{
    res.send("<h2>MOSNTER NRG LIMITED</h2>")
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})


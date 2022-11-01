const express = require ('express')
const path = require ('path')
const app = express ()
const publicPath = path.join (__dirname, '/public')
let port = process.env.port || 3030
app.use (express.static(publicPath))

app.listen (port, () => {
    console.log ('Funcionando en puerto ' + port)
})

app.get ('/', (req, res) =>{
    res.sendFile (path.join(__dirname, '/views/home.html'))
})

app.get ('/register', (req, res) =>{
    res.sendFile (path.join(__dirname, '/views/register.html'))
})

app.get ('/login', (req, res) =>{
    res.sendFile (path.join(__dirname, '/views/login.html'))
})


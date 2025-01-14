require('dotenv').config()

const express = require('express')
const workoutRoutes = require('./routes/workouts')

// express app
const app = express()


// middleware
app.use(express.json()) // * Bu middleware bize POST, PATCH yada PUT methodlarında istek içinde (req.body) gelen json dosyalarına izin vermek için açılıyor.  <-> get access to req.body
app.use((req, res, next) =>{
    console.log(req.path, req.method)
    next()
})

// routes
app.use('/api/workouts', workoutRoutes)

// listen from requests
app.listen(process.env.PORT, () =>{
    console.log('listining on port 4000')
})
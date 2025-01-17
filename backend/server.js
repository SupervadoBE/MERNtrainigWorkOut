require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require('./routes/workouts')
const userRoutes = require('./routes/user')

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
app.use('/api/user', userRoutes)

// Connect to DB
mongoose.connect(process.env.MONGO_URL)
  .then(() =>{
    // listen from requests
    app.listen(process.env.PORT, () =>{
      console.log('connected to db & listining on port 4000')
})
  })
  .catch((error) =>{
    console.log(error)
  })
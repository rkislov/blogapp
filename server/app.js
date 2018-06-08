const express = require('express')
const routes = require('./routes/index')
const newsRoute = require('./routes/news')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')


const app = express()
const PORT = process.env.PORT || 5000
const dbURL = process.env.MONGO_DB_URL || 'mongodb://localhost:27017/docapp'

mongoose.connect(dbURL, (err)=>{
    if(err){
        console.log('Ошибка подключения к БД: ' + dbURL)
    } else {
        console.log('Соединение с БД: '+ dbURL)
    }
})
app.use(cors())
app.options('*', cors())

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.use('/',routes)
app.use('/news', newsRoute)

app.listen(PORT, () => {
    console.log(`API сервер работает на порту ${PORT}`)
})
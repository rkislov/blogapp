const express = require('express')
const routes = require('./routes/index')
const newsRoute = require('./routes/news')
const cors = require('cors')


const app = express()
const PORT = process.env.PORT || 5000
app.use(cors())
app.options('*', cors())
app.use('/',routes)
app.use('/news', newsRoute)

app.listen(PORT, () => {
    console.log(`API сервер работает на порту ${PORT}`)
})
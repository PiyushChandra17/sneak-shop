const express = require('express')
const app = express()
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
const authJwt = require('./helpers/jwt')
const errorHandler = require('./helpers/errorHandler')
const productsRoutes = require('./routers/products')
const categoriesRoutes = require('./routers/categories')
const usersRoutes = require('./routers/users')
const orderRoutes = require('./routers/orders')

require('dotenv/config')

app.use(cors())
app.options('*', cors())

const api = process.env.API_URL

// Middleware
app.use(express.json())
app.use(morgan('tiny'))
app.use(authJwt())
app.use(errorHandler)
app.use('/public/uploads', express.static(__dirname + '/public/uploads'))

// Routes
app.use(`${api}/products`, productsRoutes)
app.use(`${api}/categories`, categoriesRoutes)
app.use(`${api}/users`, usersRoutes)
app.use(`${api}/orders`, orderRoutes)

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Database Connected...')
    })
    .catch((err) => {
        console.log(err)
    })

app.listen(5000, () => {
    console.log(api)
    console.log('Server started running on port 5000')
})
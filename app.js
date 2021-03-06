import 'dotenv/config'
import express from "express";
const   app     =   express()
import router from './routes.js'
import morgan from 'morgan'

app.locals.app_url = process.env.BASE_URL

app.use(morgan('tiny'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use("/public", express.static("public"))
app.use("/",express.static("public/js"))
app.set('view engine','ejs')
app.use(router)


const   port    =   process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Server started on port- ${port}`)
})
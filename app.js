import 'dotenv/config'
import Express from "express";
const   app     =   Express()
app.set('view engine','ejs')


const   port    =   process.env.PORT || 3000
app.listen(port,()=>{
    console.log(`Server started on port- ${port}`)
})
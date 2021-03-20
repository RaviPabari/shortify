const express = require('express')
const connectDB = require('./config/db')
const morgan = require('morgan')
const app = express()
//connect to our cloud mongo database
connectDB()

app.use(express.json())
if(process.env.NODE_ENV==='test'){
    app.use(morgan('tiny'))
}

//routes
app.use(express.static('public'))

app.get('/home',(req,res)=>{
    res.sendFile("/public/home.html",{root: __dirname})
})

app.use('/',require('./routes/index'))
app.use('/api/url',require('./routes/url'))

const PORT = process.env.PORT || 3000

app.listen(PORT,()=> console.log(`Server listening on port ${PORT}`))
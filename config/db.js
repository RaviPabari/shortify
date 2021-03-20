const mongoose = require('mongoose')
const config = require('config')
const db = process.env.mongo_uri

const connectDB = async ()=>{
    try {
        await mongoose.connect(db,{
            useNewUrlParser : true,
            useUnifiedTopology: true 
        })
        console.log('MongoDB connected...')
    } catch (error) {
        console.log(error.message)
        process.exit(1)
    }
}

module.exports = connectDB;
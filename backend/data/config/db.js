const mongoose = require("mongoose")

const connectDB = async ()=>{

    try{
        const connect = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser : true,
            useUnifiedTopology : true,
           
        })

        console.log(`Connection successful at ${connect.connection.host}`)
    }

    catch (error) {
        console.log(`Error occured during connecting to Mongo DB ${error.message}`)
    }
}

module.exports = connectDB
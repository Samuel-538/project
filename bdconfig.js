
const mongoose=require('mongoose')

const dbconnect=async ()=>{
    try {
        const conn = await mongoose.connect("mongodb+srv://Samuel_1304_:Samuel%401304@cluster0.u1xfcnl.mongodb.net/")
        console.log("db connected");
    }catch(err){
        console.log(`MongoDB connection error: ${err}`)
        process.exit(1)
    }
}
module.exports=dbconnect
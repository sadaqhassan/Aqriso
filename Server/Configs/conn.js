import mongoose from 'mongoose'

export const connectionDatabase = async () => {
    const URI = process.env.MNGODBSTRING
    await mongoose.connect(URI).then(()=>console.log("connected to the database"))
    .catch((err)=>console.log(err.message))
}
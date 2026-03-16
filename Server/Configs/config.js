import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'

const configApp = (app)=>{
    dotenv.config()
    app.use(express.json())
    app.use(cookieParser())
    app.use(cors())
}

export default configApp;
import express from 'express'

const configApp = (app)=>{
    app.use(express.json())
    app.use(cookieParser())
    app.use(cors())
}

export default configApp;
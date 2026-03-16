import express from 'express'
import configApp from './Configs/config.js';
import { connectionDatabase } from './Configs/conn.js';
import { userRoute } from './Routes/user.route.js';

const app = express();
configApp(app);

app.use("/api/user",userRoute)

connectionDatabase()

app.listen(4000,()=>console.log("server is running..."))


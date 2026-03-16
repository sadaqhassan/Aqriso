import express from 'express'
import configApp from './Configs/config.js';
import { connectionDatabase } from './Configs/conn.js';

const app = express();
configApp(app);


connectionDatabase()

app.listen(4000,()=>console.log("server is running..."))


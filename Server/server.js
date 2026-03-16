import express from 'express'
import configApp from './Configs/config.js';

const app = express();

configApp(app);


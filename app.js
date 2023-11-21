import express from 'express';
import Hello from "./hello.js"
import Lab5 from "./lab5.js";
import cors from "cors";
import "dotenv/config";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./Modules/routes.js";
// const express = require('express')
const app = express();
app.use(express.json());
app.use(cors());
// app.get('/hello', (req, res) => {res.send('Life is good!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app);
Hello(app);
// app.listen(4000);
app.listen(process.env.PORT || 4000);
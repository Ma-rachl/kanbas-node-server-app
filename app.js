import express from 'express';
import Hello from "./hello.js"
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import session from "express-session";
import Lab5 from "./Lab5.js";
import cors from "cors";


import "dotenv/config";


import UserRoutes from "./users/routes.js";
import mongoose from "mongoose";
  // mongoose.connect("mongodb://127.0.0.1:27017/kanbas");

//mongodb+srv://mara:<password>@cluster0.sa96nk1.mongodb.net/?retryWrites=true&w=majority
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas';
mongoose.connect(CONNECTION_STRING);
// const express = require('express')
const app = express();
app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: process.env.FRONTEND_URL
    })
);

const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
};
if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
    };
}
app.use(session(sessionOptions));





UserRoutes(app);
// app.get('/hello', (req, res) => {res.send('Life is good!')})
// app.get('/', (req, res) => {res.send('Welcome to Full Stack Dev3elopment!')})
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app);
// Hello(app);
// app.listen(4000);
app.listen(process.env.PORT || 4000);
import express, { Request, Response } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import router from './routes';
import session from 'express-session';

// dotenv.config();

const app = express();
// const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());


// Session middleware for session-based authentication
app.use(session({
  secret:'3b19b46a1a2592d56b5f4338fa7ad88d09f987d37fc5f74a25e5c12e37f0367c',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    secure: false, // Set to true if using HTTPS
  },
}));




app.use(
  cors({
    origin: [
      
      "http://localhost:5000",
    ],
    credentials: true,
  })
);

// Basic route
app.get('/', (req:Request, res: Response) => {
  res.send('hello from human!');
});


app.use("/api/", router);




export default app;
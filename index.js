import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRoute from './routes/user.route.js';
import companyRoute from './routes/company.route.js';
import jobRoute from './routes/job.route.js'
import './models/application.model.js';
import applicationRoute from "./routes/application.route.js"
dotenv.config({});

const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
// const corsOptions = {
//   //  origin: ['https://online-frontend-three.vercel.app'],
//   origin: [
//   "http://localhost:5173",
//   // "https://your-production-frontend.com", // e.g. vercel link
// ], // Adjust this to your frontend URL
//   credentials: true, // Allow cookies to be sent
// };
// app.use(cors(corsOptions));



// // ✅ Handle preflight OPTIONS request
// //  app.options('*', cors(corsOptions));
// app.use(cors(corsOptions)); 



const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://online-frontend-three.vercel.app"
  ],
  credentials: true
};
app.use(cors(corsOptions));


app.get("/", (req, res) => {
  res.send("Backend is running ✅");
});


//api routes
app.use('/api/v1/user', userRoute);
app.use('/api/v1/company', companyRoute);
app.use('/api/v1/job', jobRoute);
app.use('/api/v1/application', applicationRoute);

"http://localhost:8000/api/v1/user/register"
"http://localhost:8000/api/v1/user/login"
"http://localhost:8000/api/v1/user/profile/update"




const PORT=process.env.PORT ||10000;
app.listen(PORT, () => {
  connectDB();  
  console.log(`Server is running on port ${PORT}`);
})
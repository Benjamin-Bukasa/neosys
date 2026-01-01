import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';


//import routes


//load environment variables
dotenv.config();

//initialize express app
const app = express();
const PORT = process.env.PORT || 5000;



//middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//routes




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/Database.js";
import siswaRouter from "./router/SiswaRouter.js";
import kelasRouter from "./router/KelasRouter.js"
dotenv.config();

// cek koneksi database
try {
  db.authenticate();
  console.log("Database Connected");
} catch (error) {
  console.log("Nyalain Xampp");
}

const app = express();

app.use(cors());
app.use(express.json())
app.use(kelasRouter)
app.use(siswaRouter);



app.listen(process.env.PORT, () => {
  console.log("server runing at port " + process.env.PORT);
});

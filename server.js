// import express from 'express';
// import mongoose from 'mongoose';
// import dotenv from "dotenv"
// import mainRouter from './routes/indexRouting.js';
// import bodyParser from 'body-parser';


// dotenv.config(); 
// const port=process.env.PORT || 3000;
// const db_user =process.env.DB_USER;
// const db_name =process.env.DB_NAME;
// const db_pass=process.env.DB_PASS;

// const app=express();
// app.use(bodyParser.json());

// app.use("/", mainRouter);



// const dbUri = `mongodb+srv://${db_user}:${db_pass}@cluster0.xeuc4.mongodb.net/${db_name}`;
// mongoose.set("strictQuery", false);
// mongoose
//   .connect(dbUri)
//   .then(() => {
//     console.log("Connected to MongoDB");
//     app.listen(port, () => {
//       console.log(`Node API is running on port http://localhost:${port}`);
     
//     });
//   })
//   .catch((error) => {
//     console.log(error);
//   });


import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";
import mainRouter from './routes/indexRouting.js';
import bodyParser from 'body-parser';
import cors from 'cors'; //  sdded cors package handling

dotenv.config();

const port = process.env.PORT || 3000;
const db_user = process.env.DB_USER;
const db_name = process.env.DB_NAME;
const db_pass = process.env.DB_PASS;

const app = express();

//  ALLOW REQUESTS FROM YOUR FRONTEND
app.use(cors({
  origin: "http://localhost:5173", // frontend URL
  //origin:"https://to-do-planning-application-5w2vh1o57.vercel.app/",
  methods: ["GET", "POST", "PUT", "DELETE"], 
  credentials: true,
}));

app.use(bodyParser.json());
app.use("/", mainRouter);

const dbUri = `mongodb+srv://${db_user}:${db_pass}@cluster0.xeuc4.mongodb.net/${db_name}`;
mongoose.set("strictQuery", false);

mongoose
  .connect(dbUri)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(port, () => {
      console.log(`Node API is running on port http://localhost:${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

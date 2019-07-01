import mongoose from "mongoose";
//우리에게 요청하는건 string으로 된 DB
import dotenv from "dotenv";
dotenv.config();

mongoose.connect(
  process.env.MONGO_URL,
  {
    userNewUrlParser: true,
    useFindAndModify: false
  } //configuration
);

mongoose.set("useCreateIndex", true);

const db = mongoose.connection;

const handleOpen = () => console.log("✅ Connected to DB");
const handleError = error => console.log(`Error on DB connection: ${error}`);

db.once("open", handleOpen);
db.on("error", handleError);

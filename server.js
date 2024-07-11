import express from "express";
import dotenv from "dotenv";
import router from "./routes/surveyRoutes.js";
import errorHandler from "./middleware/errorHandler.js";
import connetDb from './configs/dbConnection.js';

dotenv.config();

const PORT = process.env.PORT || 5000;

connetDb();

const app = express();

app.use(express.json());
app.use("/api/v1/surveys", router);
app.use(errorHandler);

app.listen(PORT, () => {
    console.log("Survey manager backend APIs");
    console.log("up and running under http://localhost:"+PORT);
    console.log("now you guys can check our APis usign API client application");
})
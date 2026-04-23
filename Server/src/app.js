import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";
import path from "path";
import __dirname from "./utils/utils.js";
import {mongoUri} from "./db/db.js"
// EXPRESS 

export const app = express();
app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use("/public", express.static(path.join(__dirname, "/public")));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// CORS

app.use(cors({credentials:true,
    origin: [],
}));

// HELMET

app.use(helmet());

//MORGAN
app.use(morgan());

//router(app);


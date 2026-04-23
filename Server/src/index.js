import {app} from "./app.js";
import {port} from "./config/index.config.js";
import {connectDB} from "./db/db.js"

connectDB();

const httpServer= app.listen(port,()=>{console.log(`server running at port ${port}`);});
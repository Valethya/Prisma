import {app} from "./app.js";
import {port} from "./config/index.config.js";
import {connectDB} from "./db/db.js";
import logger from "./config/logger.config.js";

logger.info('server running');

connectDB();

const httpServer= app.listen(port,()=>{logger.info(`server running at port ${port}`);});
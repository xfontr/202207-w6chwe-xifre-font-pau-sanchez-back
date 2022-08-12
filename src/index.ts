import "./loadEnvironment";
import { connectDB, startServer } from "./server/startServer";

const port = +process.env.PORT ?? 4000;

const mongoUrl = process.env.DATABASE;

const port = +process.env.PORT ?? 4000;

(async () => {
  try {
    startServer(port);
    await connectDB(mongoUrl);
  } catch (error) {
    process.exit(1);
  }
})();

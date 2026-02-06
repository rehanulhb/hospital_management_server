import express, {
  type Application,
  type Request,
  type Response,
} from "express";
import cors from "cors";

import notFound from "./app/middlewares/notFound.js";
import config from "./config/index.js";
import globalErrorHandler from "./app/middlewares/globalErrorHandler.js";
import router from "./app/routes/index.js";

import cookieParser from "cookie-parser";
import { PaymentController } from "./app/modules/payment/payment.controller.js";

const app: Application = express();

app.post(
  "/webhook",
  express.raw({ type: "application/json" }),
  PaymentController.handleStripeWebhookEvent,
);

app.use(
  cors({
    origin: "http://localhost:3001",
    credentials: true,
  }),
);

//parser
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "Server is Running",
    environment: config.node_env,
    uptime: process.uptime().toFixed(2) + " Sec",
    timeStamp: new Date().toISOString(),
  });
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;

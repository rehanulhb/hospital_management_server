import { stripe } from "../../helper/stripe.js";
import sendResponse from "../../shared/sendResponse.js";
import { PaymentService } from "./payment.service.js";
import catchAsync from "../../shared/catchAsync.js";
import type { Request, Response } from "express";
import config from "../../../config/index.js";

const handleStripeWebhookEvent = catchAsync(
  async (req: Request, res: Response) => {
    const sig = req.headers["stripe-signature"] as string;
    const webhookSecret = config.webhook_secret;

    let event;
    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        sig,
        webhookSecret as string,
      );
    } catch (err: any) {
      console.error("⚠️ Webhook signature verification failed:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
    const result = await PaymentService.handleStripeWebhookEvent(event);

    sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Webhook Request send successfully",
      data: result,
    });
  },
);

export const PaymentController = {
  handleStripeWebhookEvent,
};

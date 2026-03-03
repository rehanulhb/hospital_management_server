import { type Request, type Response } from "express";

import { PaymentService } from "./payment.service.js";
import sendResponse from "../../shared/sendResponse.js";
import catchAsync from "../../shared/catchAsync.js";
import { stripe } from "../../helper/stripe.js";
import config from "../../../config/index.js";

const handleStripeWebhookEvent = catchAsync(
  async (req: Request, res: Response) => {
    const sig = req.headers["stripe-signature"] as string;
    const webhookSecret = config.webhook_secret as string;

    if (!webhookSecret) {
      console.error("⚠️ Stripe webhook secret not configured");
      return res.status(500).send("Webhook secret not configured");
    }

    let event;
    try {
      event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    } catch (err: any) {
      console.error("⚠️ Webhook signature verification failed:", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    try {
      const result = await PaymentService.handleStripeWebhookEvent(event);

      sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Webhook processed successfully",
        data: result,
      });
    } catch (error: any) {
      console.error("❌ Error processing webhook:", error);
      // Still return 200 to acknowledge receipt to Stripe
      // Stripe will retry if we return an error
      sendResponse(res, {
        statusCode: 200,
        success: true,
        message: "Webhook received but processing failed",
        data: { error: error.message },
      });
    }
  },
);

export const PaymentController = {
  handleStripeWebhookEvent,
};

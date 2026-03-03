import config from "../../../config/index.js";
import { stripe } from "../../helper/stripe.js";
import catchAsync from "../../shared/catchAsync.js";
import sendResponse from "../../shared/sendResponse.js";
import { PaymentService } from "./payment.service.js";
const handleStripeWebhookEvent = catchAsync(async (req, res) => {
    const sig = req.headers["stripe-signature"];
    const webhookSecret = config.webhook_secret;
    if (!webhookSecret) {
        console.error("⚠️ Stripe webhook secret not configured");
        return res.status(500).send("Webhook secret not configured");
    }
    let event;
    try {
        event = stripe.webhooks.constructEvent(req.body, sig, webhookSecret);
    }
    catch (err) {
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
    }
    catch (error) {
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
});
export const PaymentController = {
    handleStripeWebhookEvent,
};
//# sourceMappingURL=payment.controller.js.map
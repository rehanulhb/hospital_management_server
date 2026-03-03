import Stripe from "stripe";
export declare const PaymentService: {
    handleStripeWebhookEvent: (event: Stripe.Event) => Promise<{
        message: string;
    }>;
};
//# sourceMappingURL=payment.service.d.ts.map
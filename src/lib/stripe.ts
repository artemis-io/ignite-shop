import Stripe from "stripe";

const variable = process.env.STRIPE_SECRET_KEY as string;

export const stripe = new Stripe(variable, {
  apiVersion: "2023-08-16",
  appInfo: {
    name: "Ignite Shop",
  },
});

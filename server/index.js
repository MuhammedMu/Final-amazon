require("dotenv").config();
const express = require("express");
const cors = require("cors");

// The Stripe secret key must come from the environment, never from the code.
const secretKey = process.env.STRIPE_SECRET_KEY;
if (!secretKey) {
  console.error("STRIPE_SECRET_KEY is not set. Copy .env.example to .env and add your key.");
  process.exit(1);
}
const stripe = require("stripe")(secretKey);

const app = express();

app.use(cors({ origin: process.env.CLIENT_URL || true }));
app.use(express.json());

app.get("/", (req, res) => res.status(200).send("Amazon clone payment server is running"));

// POST /payment?total=<amount in cents>  ->  { secret: <client secret> }
// The browser confirms the payment with this secret, so only the amount is needed here.
app.post("/payment", async (req, res) => {
  const total = Number(req.query.total);

  // Stripe needs a whole number of cents; 50 is the USD minimum
  if (!Number.isInteger(total) || total < 50 || total > 99999999) {
    return res.status(400).json({ error: "Invalid payment amount." });
  }

  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: total,
      currency: "usd",
      payment_method_types: ["card"],
    });
    res.send({ secret: paymentIntent.client_secret });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "An error occurred while creating the payment." });
  }
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => console.log(`Payment server listening on port ${PORT}`));

const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();


const cors = require("cors");
const bodyParser = require("body-parser");
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());


app.post("/payment", cors(), async (req, res) => {
  let { amount, id } = req.body;
  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "monthly rent",
      payment_method: id,
      confirm: true,
    });
    console.log("Payment", payment);
    res.json({
      message: "Payment Successful!",
      success: true,
    });
  } catch (error) {
    console.log("Payment Error", error);
    res.json({
      message: "Payment Failed",
      success:false
    })
  }
});

app.listen(4000, () => {
  console.log("Server Running 4000");
});

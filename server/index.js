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

app.post("/pay", cors(), async (req, res) => {
  //const email = req.body;
  let { amount, id } = req.body;

  /*
  const paymentIntent = await stripe.paymentIntents.create({
    amount: 5000,
    currency: "USD",
    metadata: { integration_check: "accept a payment" },
    receipt_email: email,
  });
  */
   try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "USD",
      description: "monthly rent",
      payment_method: id,
      confirm: true,
      //metadata: { integration_check: "accept a payment" },
    //receipt_email: email,
    });
   // res.json({ client_secret: payment["client_secret"] });
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
  
  //res.json({ client_secret: paymentIntent["client_secret"] });
});

app.listen(4000, () => {
  console.log("Server Running 4000");
});
